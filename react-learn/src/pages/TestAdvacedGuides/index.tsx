import React, { Suspense, useState } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import Toolbar from './components/ToolBar';
import { IThemeContext, IThemes, ThemeContext, themes } from './context';

function TestAdvacedGuides() {
  const [sum, setSum] = useState<number>(0);
  const [DynamicComponent, setDynamicComponent] = useState<React.LazyExoticComponent<React.FC<{ name: string }>>>();
  const [theme, setTheme] = useState<keyof IThemes>('dark');

  return (
    <ErrorBoundary>
      <div className="App">
        <div>sum={sum}</div>
        <button onClick={() => {
          import('../../utils/math').then((res) => {
            setSum(sum + res.add(1, 3))
          })
        }}>计算</button>
        <hr />
        <Suspense fallback={<div>loading...</div>}>
          {
            DynamicComponent &&
            <DynamicComponent name="1" />
          }
          {
            DynamicComponent &&
            <DynamicComponent name="2" />
          }
        </Suspense>
        <button onClick={() => {
          setDynamicComponent(React.lazy(async () => {
            return import('./components/OtherComponent')
          }));
        }}>显示动态组件</button>
      </div>
      {/* 测试context */}
      <button onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
      }}>改变主题</button>
      <ThemeContext.Provider value={{
        ...themes[theme], toggleTheme: () => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }
      } as IThemeContext}>
        <Toolbar />
      </ThemeContext.Provider>

      {/* TODO: 研究render prop */}
    </ErrorBoundary >
  );
}

export default TestAdvacedGuides;