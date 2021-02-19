import React from 'react'
import { IThemeContext, ThemeContext } from '../context';
import Button from './Button';

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType:React.Context<IThemeContext> = ThemeContext;

    componentDidUpdate() {
        console.log(this.context)
    }

    componentDidMount() {
        console.log(this.context)
    }
    render() {
        const {
            background,
            foreground,
        } = this.context;
        return (
            <>
                <div>background: {background} foreground: {foreground}</div>
                <Button theme={foreground} />
            </>
        )
    }
  }

  export default ThemedButton;