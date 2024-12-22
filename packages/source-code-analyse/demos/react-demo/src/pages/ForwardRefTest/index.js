import React from 'react';

function logProps(Component) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;

            // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }
    // return LogProps;
    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

class InnerComp extends React.Component {
    render() {
        return <div id="InnerComp">
            被包裹的组件-text={this.props.text}
        </div>
    }
}

const Comp = logProps(InnerComp);

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    click = () => {
        console.log(this.ref.current);
    }
    render() {
        return (
            <div>
                <h1>测试forwardRef</h1>
                <Comp ref={this.ref} text="测试" />
                <button onClick={this.click}>点击打印ref</button>
            </div>
        )
    }
}