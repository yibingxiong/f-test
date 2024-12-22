import React from 'react';

export default class About extends React.Component() {

    doFetch = () => {
        fetch('/teststatus', (res) => {
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <h1>About3</h1>
                <button onClick={this.doFetch}>发请求</button>
            </div>
        )
    }
}