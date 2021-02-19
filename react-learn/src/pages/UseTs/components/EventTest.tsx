import React, {  ChangeEvent, MouseEvent, useEffect } from 'react'

const EventTest:React.FC = () => {

  const onKeydown  =(e: KeyboardEvent) => {
    console.log(e.key)
    console.log(e.metaKey)
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
  })

  const onClick = (e:MouseEvent) => {
    console.log(e.pageX)
    console.log(e.target)
  }

  const onMouseMove = (e: MouseEvent) => {
    console.log(e.clientX)
  }

  const onChange = (e: ChangeEvent) => {
    console.log(e.currentTarget.nodeValue)
  }

  return (
    <React.Fragment>
      <input onChange={onChange}/>
      <button onClick={onClick}>点我呀</button>
      <div style={{width:200,height:200,background:'red'}} onMouseMove={onMouseMove}></div>
    </React.Fragment>
  )
}

export default EventTest;