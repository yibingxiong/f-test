import React from 'react';

export default class Component2 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="wraper">
                <div id="aaaaa"></div>
                <div id="aaaaa"></div>
                <div className="a">
                    <div className="b"></div>
                </div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
        )
    }
}