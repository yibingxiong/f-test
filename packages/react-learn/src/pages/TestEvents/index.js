import React from 'react'

export default class TestEvents extends React.Component {
  componentDidMount() {
    document.getElementById('B').onclick = function(e) {
      console.log('e12', e, e.currentTarget)
      setTimeout(() => {
        console.log('e11', e, e.currentTarget);
      }, 0);
    }
  }
  render() {
    return (
      <div onClick={(event) => {
        setTimeout(() => {
          console.log('A', event)
        }, 1000);
      }}>
        A
        <div id='B' onClick={(event) => {
          console.log('B', event)
          // event.stopPropagation();
        }}>
          B
          <div onClick={(event) => {
            console.log('C', event)
          }}>C</div>
        </div>
      </div>
    )
  }
}