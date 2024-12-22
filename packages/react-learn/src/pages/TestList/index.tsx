// @ts-nocheck
import React from 'react'
import List from '../../components/List';

// https://www.jianshu.com/p/39404c94dbd0

export default class TestList extends React.Component {
  getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      }, 3000);
    })
  }

  render() {
    return (
      <List
        getData={this.getData}
        height={600}
        itemHeight={100}
        renderItem={(item) => {
          return (
            <div key={item} style={{ height: 100, background: 'red', border: '1px solid black' }}>{item}</div>
          )
        }}
      />
    )
  }
}