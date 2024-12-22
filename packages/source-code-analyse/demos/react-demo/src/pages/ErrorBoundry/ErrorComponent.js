import React from 'react';

function Columns() {
    return (
        <React.Fragment>
            <td>第一列</td>
            <td>第二列</td>
        </React.Fragment>
    )
}

export default class Home extends React.Component {
    state = {
        showError: false,
    }
    componentDidMount() {
    }
    click = () => {
        this.setState({
            showError: true,
        })
    }
    render() {
        if (this.state.showError) {
            throw new Error("抛出错误");
        }
        return (
            <div>
                <div onClick={this.click}>我是产生错误的组件</div>
                <table>
                    <tr>
                        <Columns />
                    </tr>
                    <tr>
                        <Columns />
                    </tr>
                </table>
            </div>
        )
    }
}