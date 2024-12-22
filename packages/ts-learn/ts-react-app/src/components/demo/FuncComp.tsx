import React from 'react'

interface FuncCompProps {
    name: string;
    age?: number;
}

const FuncComp: React.FC<FuncCompProps> = ({ name, age }) => <h1>函数组件{name}-{age}</h1>

FuncComp.defaultProps = {
    age: 1
}
export default FuncComp;