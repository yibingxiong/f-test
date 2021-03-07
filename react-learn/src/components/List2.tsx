// @ts-nocheck

// https://www.cnblogs.com/songbw/p/11662783.html
// https://www.jianshu.com/p/39404c94dbd0


import React, { useEffect, useRef, useState } from 'react';

const List2 = ({
  renderItem,
  height,
  itemHeight,
  data,
  distance = 15,
  onReachEnd = () => { },
}) => {
  let currentPos = 0;
  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [startY, setStatY] = useState(0);
  const [isPullRefresh, setIsPullRefresh] = useState(false);

  useEffect(() => {
    setStart(0)
    setVisibleCount(Math.ceil(height / itemHeight))
    setEnd(Math.ceil(height / itemHeight))
  }, [height, itemHeight])

  const onScroll = () => {
    const { offsetHeight, scrollTop, scrollHeight } = scrollWrapper.current;
    let showOffset = scrollTop - (scrollTop % itemHeight);
    scrollContent.current.style.WebkitTransform = `translate3d(0, ${showOffset}px, 0)`
    setStart(Math.floor(scrollTop / itemHeight));
    setEnd(Math.floor(scrollTop / itemHeight) + visibleCount + 1);

    if (offsetHeight + scrollTop + distance > scrollHeight) {
      onReachEnd();
    }
  }

  return (
    <div style={{
      overflow: 'scroll',
      position: 'relative',
      top: 0,
      left: 0,
      height: height + 'px',
    }} ref={scrollWrapper} onScroll={onScroll}>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: data.length * itemHeight + 'px' }}></div>
      <div ref={scrollContent}
        onTouchStart={(e) => {
          console.log('start')
          const { scrollTop } = scrollWrapper.current
          if (scrollTop === 0) {
            setStatY(e.touches[0].pageY);
            e.stopPropagation();
            e.preventDefault();
          }
        }}
        onTouchMove={(e) => {
          
          const pageY = e.touches[0].pageY;
          const dis = pageY - startY;
          currentPos = dis;
          console.log('dis', dis)
          const { scrollTop } = scrollWrapper.current
          if (dis < 0 || dis > 90 || scrollTop !== 0) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          if (dis > 60) {
            setIsPullRefresh(true);
          } else {
            setIsPullRefresh(false);
          }
          scrollContent.current.style.transform = `translateY(${dis}px)`;
        }}
        onTouchEnd = {(e) => {
          if (currentPos > 60) {

          } else {
            scrollContent.current.style.transition = '.2s'
            setTimeout(() => {
              scrollContent.current.style.transition = ''
          }, 200)
            scrollContent.current.style.transform = `translateY(${0}px)`;
            currentPos = 0;
          }
        }}
      >
        <div style={{ marginTop: '-60px', height: '60px', background: 'red' }}>下拉刷新...</div>
        {
          data.map((item, index) => {
            if (index >= start && index <= end) {
              return renderItem(item, index);
            }
            return null;
          })
        }
      </div>
    </div>
  )
}

export default List2;