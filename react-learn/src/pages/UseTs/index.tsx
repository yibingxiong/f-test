import React from 'react'
import ClassComponent from './components/ClassComponent'
import ClassComponent3 from './components/ClassComponent3';
import FuncComponent from './components/FuncComponent'
import LoadingHOC from './components/HighOrderComponent'
import RefTest from './components/RefTest';

export default class UseTs extends React.Component {

    Hoc = LoadingHOC(ClassComponent);
    
    render() {
        return (
            <>
                <ClassComponent name="hello" />
                <FuncComponent name="world" initialValue={100}/>
                <this.Hoc name="hello" loading={true} />
                <ClassComponent3 name="333" initialValue={3}/>
                
                <RefTest />
            </>
        )
    }
}