import { MouseEvent } from "react";
import React from 'react';

interface MousePos {
    x: number;
    y: number;
}

interface CatProps {
    mouse: MousePos;
}
class Cat extends React.Component<CatProps> {
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{zIndex: 100, width: 10,height:10, background: 'blue', position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

interface MouseProps {
    render: (mouse: MousePos) => React.ReactElement;
}
type MouseState = MousePos;

class Mouse extends React.Component<MouseProps, MouseState> {
    constructor(props: MouseProps) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event: MouseEvent) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: 100,width: 100, background:'red', }} onMouseMove={this.handleMouseMove}>

                {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

export default MouseTracker;