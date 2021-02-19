import React from 'react'

interface Greeting {
    name: string;
}

export default function (props: Greeting) {
    return <h1>{props.name}</h1>
}