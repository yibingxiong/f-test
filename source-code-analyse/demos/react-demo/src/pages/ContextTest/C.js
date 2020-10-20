import React from 'react';
import MyContext from './MyContext';
import D from './D';

function C() {
    return (
        <MyContext.Consumer>
            {
                (value) => (
                    <div>
                        <h3>我是C组件</h3>
                        <div>我是来自A的数据: {value}</div>
                        <D />
                    </div>
                )
            }
        </MyContext.Consumer>
    )
}

export default C;