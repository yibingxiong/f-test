import React from 'react'
import ClassComponent from './components/ClassComponent'
import ClassComponent3 from './components/ClassComponent3';
import EventTest from './components/EventTest';
import FuncComponent from './components/FuncComponent'
import LoadingHOC from './components/HighOrderComponent'
import RefTest from './components/RefTest';
import { Action, createStore, Reducer } from '../../lib/MyRedux';
import axios from 'axios';

class A extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        console.log('A constructor');
    }
    
    componentDidMount () {
        console.log('A componentDidMount');
    }

    shouldComponentUpdate () {
        console.log('A shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('A componentDidUpdate');
    }
    render () {
        console.log('A render');
        return (
            <B />
        )
    }
}

class B extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        console.log('B constructor');
    }
    
    componentDidMount () {
        console.log('B componentDidMount');
    }

    shouldComponentUpdate () {
        console.log('B shouldComponentUpdate');
        return true;
    }
    
    componentDidUpdate() {
        console.log('B componentDidUpdate');
    }
    render () {
        console.log('B render');
        return (
            <div>B</div>
        )
    }
}

export default class UseTs extends React.Component {

    Hoc = LoadingHOC(ClassComponent);

    componentDidMount() {
        // interface State {
        //     name: string;
        //     age: number;
        // }

        // const reducer: Reducer<State> = (state: State, action) => {
        //     switch (action.type) {
        //         case 'setAge':
        //             return { ...state, age: action.age }
        //         default:
        //             return state;
        //     }
        // }

        // console.log('3333')
        // const store = createStore<State>(reducer, { name: 'hello', age: 11 });
        // const {
        //     subscribe,
        //     dispatch,
        //     getState,
        // } = store;
        // subscribe(() => {
        //     console.log(getState());
        // })
        // setTimeout(() => {
        //     dispatch({ type: 'setAge', age: 14 })
        // }, 10000);
    }

    render() {
        return (
            <>
                <div onClick={() => {
                   axios.interceptors.request.use(function (config) {
                    // Do something before request is sent
                    console.log('----------1', config)
                    return config;
                  }, function (error) {
                    // Do something with request error
                    return Promise.reject(error);
                  });
                  debugger;
                    axios.get('/index.html')
                    .then(res=> {
                        console.log(res.data);
                    })
                }}>发送请求1</div>
                <A />
                <ClassComponent name="hello" />
                <FuncComponent name="world" initialValue={100} />
                <this.Hoc name="hello" loading={true} />
                <ClassComponent3 name="333" initialValue={3} />
                <RefTest />
                <EventTest />
            </>
        )
    }
}