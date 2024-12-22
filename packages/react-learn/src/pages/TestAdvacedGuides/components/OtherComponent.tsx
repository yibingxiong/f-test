import React from 'react';

const DynamicComponent: React.FC<{ name: string }> = ({ name }) => {
    return (
        // @ts-ignore
        <div>一个动态组件{name.toFixed(3)}</div>
    )
}

export default DynamicComponent