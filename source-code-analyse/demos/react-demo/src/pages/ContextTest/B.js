import React from 'react';
import C from './C';
class B extends React.Component {
    render() {
        return (
            <div>
                <h3>我是B组件</h3>
                <C />
            </div>
        );
    }
}
export default B;