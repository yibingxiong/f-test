import React from 'react'


class TestSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.setState({
      count: this.state.count + 1
    })
    console.log('1', this.state.count); // 1 0
    
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log('3', this.state.count);  // 3 2
    }, 0);
    this.setState({
      count: this.state.count + 1
    })
    console.log('2', this.state.count); // 2 0


    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log('4', this.state.count); // 4 3
    }, 0);
  }

  render() {
    return (
      <div>testState  {this.state.count}</div>
    )
  }
}

React.createElement()
export default TestSetState;