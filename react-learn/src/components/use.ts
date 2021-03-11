import { useState, useCallback, useEffect } from 'react'

type NumberList = number[]
type ObserverList = Array<React.RefObject<any>>
type CallbackFunction = (indexList: NumberList) => void
type ResultType = [React.Dispatch<React.SetStateAction<React.RefObject<any>[]>>]

/**
 * UseIntersectionObserver
 * @param observerList 由被观察目标所组成的数组，数组项是由React.createRef构建出来的对象
 * @param callback 当目标元素被曝光所需要触发的函数，该函数接受一个参数indexList，由被曝光元素在observerList数组中的索引组成
 * @param infinite 是否持续观察目标元素，默认值为false。（因为曝光打点一般只需上报一次）
 * @param opt 可以自定义曝光条件（值的构成参考MDN），默认为{ threshold: [1] }，只有当目标元素完全暴露在可视区内才触发回调
 */
function UseIntersectionObserver(
  observerList: ObserverList,
  callback: CallbackFunction,
  infinite: boolean = false,
  opt: IntersectionObserverInit = {}
): ResultType {
  // list 为需要监听的元素列表。setList做为UseIntersectionObserver函数的返回值，可以让调用者修改需要监听的 list 
  const [list, setList] = useState<ObserverList>(observerList)

  // intersectionObserver： 观察者对象
  let intersectionObserver: IntersectionObserver | null = null

  const observeExposure = useCallback((list: ObserverList) => {
    if (typeof IntersectionObserver === 'undefined') {
      throw new Error('Current browser does not support IntersectionObserver ')
    }
    if (list.length === 0) return
    // 当观察者存在时销毁该对象
    intersectionObserver && intersectionObserver.disconnect()
    // 构造新的观察者实例
    intersectionObserver = new IntersectionObserver(entries => {
      // 保存本次监听被曝光的元素
      let activeList: NumberList = []

      // 递归每一个本次被监听对象，如果按照曝光条件出现在可视区，则调用callback函数，并且取消监听
      entries.forEach(entrie => {
        // 找出本次被监听对象在list中的索引
        const index = Array.from(list).findIndex(
          item => item.current === entrie.target
        )
        // 防止意外发生
        if (index === -1) return

        // isIntersecting是每个被监听的元素所自带的属性，若为ture，则表示被曝光
        // 并且未被曝光过
        if (entrie.isIntersecting) {
          // 保存本次曝光元素索引
          activeList.push(index)

          // 解除观察， 若需要无限观察则不取消监听
          !infinite &&
            intersectionObserver &&
            intersectionObserver.unobserve(list[index].current)
        }
      })

      // callback函数
      activeList.length > 0 && callback(activeList)
    }, opt)

    list.forEach(item => {
      item.current &&
        intersectionObserver &&
        intersectionObserver.observe(item.current)

      // 可以兼容直接传入DOM节点。
      // if((<React.RefObject<any>>item).current) {
      //   intersectionObserver.observe((<React.RefObject<any>>item).current)
      // } else if ((<HTMLElement>item)) {
      //   intersectionObserver.observe((<HTMLElement>item))
      // }
    })
  }, [list])

  useEffect(() => {
    observeExposure(list)

    // 当 umount 时取消链接
    return () => {
      intersectionObserver && intersectionObserver.disconnect()
    }
  }, [list])

  return [setList]
}

const useIntersectionObserver = UseIntersectionObserver

export default useIntersectionObserver

