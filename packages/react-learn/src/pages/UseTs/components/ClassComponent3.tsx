import React  from 'react'
import { createPropsGetter } from '../createPropsGetter';


const defaultProps = {
  initialValue: 0,
}
interface ClassComponent3Props {
  name: string;
  initialValue?:number;
}

interface ClassComponent3State {
  count: number;
}

const getProps = createPropsGetter(defaultProps)

class ClassComponent3 extends React.Component<ClassComponent3Props, ClassComponent3State> {

  static defaultProps = defaultProps;

  constructor(props: ClassComponent3Props) {
    super(props);
    this.state = {
      count: getProps(this.props).initialValue,
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

export default ClassComponent3;