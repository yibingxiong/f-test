import React from 'react'
import ClassComponent from './components/ClassComponent'
import ClassComponent3 from './components/ClassComponent3';
import EventTest from './components/EventTest';
import FuncComponent from './components/FuncComponent'
import LoadingHOC from './components/HighOrderComponent'
import RefTest from './components/RefTest';
import { Action, createStore, Reducer } from '../../lib/MyRedux';

export default class UseTs extends React.Component {

    Hoc = LoadingHOC(ClassComponent);

    componentDidMount() {
        interface State {
            name: string;
            age: number;
        }

        const reducer: Reducer<State> = (state: State, action) => {
            switch (action.type) {
                case 'setAge':
                    return { ...state, age: action.age }
                default:
                    return state;
            }
        }

        console.log('3333')
        const store = createStore<State>(reducer, { name: 'hello', age: 11 });
        const {
            subscribe,
            dispatch,
            getState,
        } = store;
        subscribe(() => {
            console.log(getState());
        })
        setTimeout(() => {
            dispatch({ type: 'setAge', age: 14 })
        }, 10000);
    }

    render() {
        return (
            <>
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