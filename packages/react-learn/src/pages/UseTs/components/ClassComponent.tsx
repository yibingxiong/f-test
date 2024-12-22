import React, { ComponentClass } from 'react'

const defaultProps = {
  initialValue: 0,
}

interface ClassComponentProps {
  name: string;
}

interface ClassComponentState {
  count: number;
}

// 加这个是为了ref引用，然而这其实并没什么用
export type ClassComponentType = React.Component<ClassComponentProps & typeof defaultProps, ClassComponentState>;

const ClassComponent = class extends React.Component<ClassComponentProps & typeof defaultProps, ClassComponentState> {

  static defaultProps = defaultProps

  constructor(props: ClassComponentProps & typeof defaultProps) {
    super(props);
    this.state = {
      count: this.props.initialValue,
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
} as ComponentClass<ClassComponentProps & Partial<typeof defaultProps>>;

export default ClassComponent;