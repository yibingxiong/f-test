import React, {useEffect, useRef } from 'react'
import ClassComponent3 from './ClassComponent3';

const RefTest: React.FC = () => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const divRef: React.RefObject<HTMLDivElement> = React.createRef();
  // 这里有坑：useRef返回的类型是MutableRefObject<T | undefined>
  // 而组件ref期望的是RefCallback<T> | RefObject<T> | null | string
  const div2Ref = useRef<React.RefObject<HTMLDivElement>>();
  const componentRef: React.RefObject<ClassComponent3> = React.createRef();

  let textAreaRef: HTMLTextAreaElement | null;
  useEffect(() => {
    console.log(inputRef)
    console.log(divRef);
    console.log(textAreaRef);
  }, []);
  return (
    <div ref={divRef}>
      {/* 下面这行会报错 */}
      {/* <div ref={div2Ref}>a</div> */}
      <input ref={inputRef} />
      <ClassComponent3 name="hello" ref={componentRef} />
      <textarea ref={(ref) => {
        textAreaRef = ref;
      }}></textarea>
    </div>
  )
}

export default RefTest;