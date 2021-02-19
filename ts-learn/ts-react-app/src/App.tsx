import React from 'react'
import { Button } from 'antd'
import FuncComp from './components/demo/FuncComp';
import ClassComp from './components/demo/ClassComp'
import LoadingHOC from './components/demo/LoadingHOC'

interface Greeting {
    name: string;
}

export default function App(props: Greeting) {
    return (
        <>
            <Button>{props.name}</Button>
            <FuncComp name="hello" />
            <ClassComp name="hello" />
            <LoadingHOC loading={true} name="loading"/>
        </>
    )
}