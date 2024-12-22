import React  from 'react'

interface ClassComponent2Props {
  name: string;
  initialValue?:number;
}

interface ClassComponent2State {
  count: number;
}


class ClassComponent2 extends React.Component<ClassComponent2Props, ClassComponent2State> {

  static defaultProps = {
    initialValue: 0,
  }

  constructor(props: ClassComponent2Props) {
    super(props);
    this.state = {
      count: this.props.initialValue!,
    }
  }

  render() {
    return (
      <div>
        <div>name: {this.props.name}</div>
        <div>count: {this.state.count}</div>
        <button onClick={() => {
          this.setState((prevState) => {
            return (
              {
                count: prevState.count + 1
              }
            )
          })
        }}>来呀，点我呀</button>
      </div>
    )
  }
};

export default ClassComponent2;