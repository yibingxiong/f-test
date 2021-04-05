import React from 'react'


class TestSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('1', this.state.count); // 1 0
    // setTimeout(() => {
      
    //   for (let i = 0; i < 100; i++) {
    //     this.setState((state, props) => ({count: state.count + 1}));
    //   }
    // }, 0);

    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('3', this.state.count);  // 3 2
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('7', this.state.count);  // 3 2
    // }, 0);
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('2', this.state.count); // 2 0


    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('4', this.state.count); // 4 3
    // }, 0);
  }

  render() {
    console.log('render')
    debugger;
    return (
      <div onClick={() => {
        // setTimeout(() => {
          debugger;
          this.setState({
            count: this.state.count + 1
          });
          console.log('---------------')
        // }, 0);
        // Promise.resolve().then(() => {
        //   console.log('5', this.state.count);
        //   this.setState({
        //     count: this.state.count + 1
        //   });
        //   console.log('6', this.state.count);
        // })
      }}>testState  {this.state.count}</div>
    )
  }
}

React.createElement()
export default TestSetState;