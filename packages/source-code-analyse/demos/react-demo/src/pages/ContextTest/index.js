import React from 'react';
import B from './B';
import MyContext from './MyContext';
export default class A extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <MyContext.Provider value={'我是来自A的数据'}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}