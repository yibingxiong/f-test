import React from 'react';
import MyContext from './MyContext';

class D extends React.Component {
    render() {
        let context = this.context;
        return (
            <div>
                <h3>我是D组件</h3>
                <div>我拿到了A中传递过来的数据</div>
                {context}
            </div>
        );
    }
}

D.contextType = MyContext;

export default D;