import React from 'react'
import { Button } from 'antd'

interface Greeting {
    name: string;
}

export default function App(props: Greeting) {
    return <Button>{props.name}</Button>
}