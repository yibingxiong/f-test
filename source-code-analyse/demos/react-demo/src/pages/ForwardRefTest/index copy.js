import React from 'react';

const LabelInput =
    React.forwardRef((props, ref) => {
        return <div>
            <label>{props.label}</label>
            <input ref={ref} className="input" style={{ border: '1px solid red' }} />
        </div>
    })

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    focus = () => {
        try {
            this.ref.current.focus();
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div>
                <h1>测试forwardRef</h1>
                <LabelInput ref={this.ref} label="手机号"/>
                <button onClick={this.focus}>点击input可以获取焦点</button>
            </div>
        )
    }
}