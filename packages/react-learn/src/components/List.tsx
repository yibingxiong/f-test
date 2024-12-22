// @ts-nocheck
import React from 'react';


// 应该接收的props: renderItem: Function<Promise>, getData:Function;  height:string; itemHeight: string

// 下滑刷新组件
class InfiniteTwo extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = props.renderItem
    this.getData = props.getData
    this.state = {
      loading: false,
      page: 1,
      showMsg: false,
      List: [],
      itemHeight: this.props.itemHeight || 0,
      start: 0,
      end: 0,
      visibleCount: 0
    }
  }

  onScroll() {
    let { offsetHeight, scrollHeight, scrollTop } = this.refs.scrollWrapper;
    let showOffset = scrollTop - (scrollTop % this.state.itemHeight)
    const target = this.refs.scrollContent
    target.style.WebkitTransform = `translate3d(0, ${showOffset}px, 0)`
    this.setState({
      start: Math.floor(scrollTop / this.state.itemHeight),
      end: Math.floor(scrollTop / this.state.itemHeight + this.state.visibleCount + 1)
    })
    if (offsetHeight + scrollTop + 15 > scrollHeight) {
      if (!this.state.showMsg) {
        let page = this.state.page;
        page++;
        this.setState({
          loading: true
        })
        this.getData(page).then(data => {
          this.setState({
            loading: false,
            page: page,
            List: data.concat(this.state.List),
            showMsg: data && data.length > 0 ? false : true
          })
        })
      }
    }
  }

  componentDidMount() {
    this.getData(this.state.page).then(data => {
      this.setState({
        List: data
      })
      // 初始化列表以后，也需要初始化一些参数
      requestAnimationFrame(() => {
        let { offsetHeight } = this.refs.scrollWrapper;
        let visibleCount = Math.ceil(offsetHeight / this.state.itemHeight)
        let end = visibleCount + 1
        this.setState({
          end,
          visibleCount
        })
      })
    })
  }

  render() {
    const { List, start, end, itemHeight } = this.state
    const renderList = List.map((item, index) => {
      if (index >= start && index <= end)
        return (
          this.renderItem(item, index)
        )
    });
    return (
      <div>
        <div
          ref="scrollWrapper"
          onScroll={this.onScroll.bind(this)}
          style={{ height: this.props.height, overflow: 'scroll', position: 'relative' }}
        >
          <div style={{ height: `${renderList.length * itemHeight}px`, position: 'absolute', top: 0, right: 0, left: 0 }}>

          </div>
          <div ref="scrollContent" style={{ position: 'relative', top: 0, right: 0, left: 0 }}>
            {renderList}
          </div>
        </div>
        {this.state.loading && (
          <div>加载中</div>
        )}
        {this.state.showMsg && (
          <div>暂无更多内容</div>
        )}
      </div>
    )

  }
}


export default InfiniteTwo;