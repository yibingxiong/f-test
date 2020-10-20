import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FirstExample() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    let timer = 0;
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        timer = setInterval(() => {
            console.log('执行');
            setCount(count+1);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    })

    return (
        <div>
            <p>useState</p>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setTimeout(() => {
                    setCount(count + 1); 
                    console.log(count);
                    setCount(count + 1);
                }, 0);
            }
            }>
                Click me
      </button>
        </div>
    );
}

class ClassExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
          </button>
            </div>
        );
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>测试hook</h1>
                <FirstExample />
                <ClassExample />
            </div>
        )
    }
}