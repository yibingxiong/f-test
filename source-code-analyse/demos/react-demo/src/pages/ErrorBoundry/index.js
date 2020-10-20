import React from 'react';
import ErrorComponent from './ErrorComponent';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        console.log('getDerivedStateFromError');
        return { hasError: true };
    }
    componentDidCatch (error, info) {
        console.log('componentDidCatch');
        console.log({
            error,
            info,
        })
    }
    render() {
        if (this.state.hasError) {
            return <div>发生了某种错误</div>
        }
        return (
            <div>
                <h3>错误边界测试</h3>
                <ErrorComponent />
            </div>
        )
    }
}