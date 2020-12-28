import React from 'react'
import { ThemeContext } from '../context';
import Button from './Button';

const ThemedButton2: React.FC<{}> = () => {
  return (
    <ThemeContext.Consumer>
      {
        value => {
          return (
            <>
              <div>background: {value.background} foreground: {value.foreground}</div>
              <button onClick={() => {
                if (typeof value.toggleTheme === 'function') {
                  value.toggleTheme();
                } else {
                  alert('无法改变')
                }
              }}>在嵌套组件中改主题</button>
              <Button theme={value.background} />;
            </>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}

export default ThemedButton2;