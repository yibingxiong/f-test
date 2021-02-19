import React from 'react'
import { Button } from 'antd';

interface ClassCompProps {
    name: string;
    age?: number;
}
interface State {
    count: number;
}

class ClassComp extends React.Component<ClassCompProps, State> {
    state: State = {
        count: 0,
    }
    static defaultProps = {
        age: 10,
    }

    render() {
        return (
            <>
                <div>函数组件{this.props.name}-{this.props.age}-{this.state.count}</div>
                <Button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>点击</Button>
            </>
        )
    }
}

export default ClassComp;