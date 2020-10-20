import React from 'react';
import Toast from './Toast';
export default class PortalTest extends React.Component {
    render() {
        return (
            <div>
                <h1>PortalTest</h1>
                <Toast text="toast提示"/>
            </div>
        )
    }
}