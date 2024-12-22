import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Link to="/context">context测试</Link>
                </div>
                <div>
                    <Link to="/ErrorBoundry">错误边界测试</Link>
                </div>
                <div>
                    <Link to="/PortalTest">Protal测试</Link>
                </div>
                <div>
                    <Link to="/ForwardRefTest">forwardRef测试</Link>
                </div>
                <div>
                    <Link to="/HookTest">测试Hook特性</Link>
                </div>
            </div>
        )
    }
}