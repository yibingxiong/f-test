import React, { FunctionComponent, useState } from 'react'

const defaultProps = {
    initialValue: 0,
}

interface MyFunctionComponentProps {
    name: string;
    initialValue?: number;
}

const MyFunctionComponent: React.FC<MyFunctionComponentProps & typeof defaultProps> = ({
    initialValue,
    name,
}) => {
    const [count, setCount] = useState<number>(initialValue)

    return (
        <div>
            <div>name: {name}</div>
            <div>count: {count}</div>
            <button onClick={() => {
                setCount(count + 1);
            }}>来呀，点我呀</button>
        </div>
    )
}

MyFunctionComponent.defaultProps = {
    initialValue: 0,
}

export default MyFunctionComponent as FunctionComponent<MyFunctionComponentProps & Partial<typeof defaultProps>>;