import React from 'react'

class A extends React.Component {
  constructor(props) {
    super(props);
    console.log('A constructor')
    this.state = {
      b: this.props.a + 1,
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('A getDerivedStateFromProps')
  //   return {
  //     b: props.a + 1,
  //   }
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('A getSnapshotBeforeUpdate')
  //   return { a: 1 }
  // }

  componentWillReceiveProps(nextProps) {
    console.log('A componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('A shouldComponentUpdate')
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('A componentDidUpdate', snapshot)
  }
  componentWillUpdate() {
    console.log('A componentWillUpdate')
  }
  componentDidMount() {
    console.log('A componentDidMount')
  }
  componentWillUnmount() {
    console.log('A componentWillUnmount')
  }
  // componentWillMount() {
  //   console.log('A componentWillMount')
  // }
  render() {
    console.log('A render')
    return <div>A {this.props.a}--{this.state.b}<B d={3} /> </div>
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
    console.log('B constructor');
    this.state = {
      e: this.props.d + 10
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('B getDerivedStateFromProps')
  //   return {
  //     e: props.d + 10
  //   }
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('B getSnapshotBeforeUpdate')
  //   return { d: 1 }
  // }
  componentWillReceiveProps(nextProps) {
    console.log('B componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('B shouldComponentUpdate')
    return true;
  }
  componentDidUpdate(preProps, prevState, snapshot) {
    console.log('B componentDidUpdate', snapshot)
  }
  componentWillUpdate() {
    console.log('B componentWillUpdate')
  }
  componentDidMount() {
    console.log('B componentDidMount')
  }
  componentWillUnmount() {
    console.log('B componentWillUnmount')
  }
  // componentWillMount() {
  //   console.log('B componentWillMount')
  // }
  render() {
    console.log('B render')
    return <div>B</div>
  }
}

export default class LifeCycleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      isShow: true,
    }
  }
  render() {

    return (
      <>
        <div onClick={() => {
          this.setState({
            a: this.state.a + 1,
          })
        }}>点击</div>
        <div onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          });
        }}>切换</div>
        {
          this.state.isShow &&
          <A a={this.state.a} />
        }
      </>
    )
  }
}