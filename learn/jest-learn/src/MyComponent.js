import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('1');
    }
    render() {
        return (
            <div className="wraper">
                {this.props.title || ''}
                {this.props.children}
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <button onClick={this.props.onButtonClick}>点我</button>
            </div>
        )
    }
}