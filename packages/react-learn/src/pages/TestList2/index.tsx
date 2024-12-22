// @ts-nocheck
import React from 'react'
import List2 from '../../components/List2';

// https://www.jianshu.com/p/39404c94dbd0

let i = 11;

function generateData() {
  const res = [];
  while(res.length < 10) {
    res.push(i++)
  }
  return res;
}
export default class TestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  }

  render() {
    return (
      <List2
        data={this.state.data}
        height={600}
        itemHeight={100}
        onReachEnd = {() => {
          this.setState({
            data: [...this.state.data, ...generateData()]
          })
        }}
        renderItem={(item, index) => {
          return (
            <div key={index} style={{ height: 100, background: 'red', border: '1px solid black' }}>{item}</div>
          )
        }}
      />
    )
  }
}