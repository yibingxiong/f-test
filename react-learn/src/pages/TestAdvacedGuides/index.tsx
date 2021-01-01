import React, { Profiler, Suspense, useState } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import FuncComp from './components/FuncComp';
import Modal from './components/Modal';
import NumberComp from './components/NumberCom';
import WordAdder from './components/PureComponentTest';
import TestRef from './components/TestRef';
import TextInput from './components/TextInput';
import Toolbar from './components/ToolBar';
import { IThemeContext, IThemes, ThemeContext, themes } from './context';

function TestAdvacedGuides() {
  const [sum, setSum] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false)

  const [DynamicComponent, setDynamicComponent] = useState<React.LazyExoticComponent<React.FC<{ name: string }>>>();
  const [theme, setTheme] = useState<keyof IThemes>('dark');
  const ref = React.createRef<HTMLInputElement>();
  const ref2 = React.createRef<HTMLInputElement>();
  return (
    <Profiler id="rootProfiler" onRender={(id: string,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions) => {
      console.log('rootProfiler', {
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      });
    }}>
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

        {/* 测试forwardRef */}

        <TextInput ref={ref} />
        <button onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
          console.log(ref2.current)
        }
        }>获取焦点</button>
        <React.Fragment>
          <div>写着玩</div>
        </React.Fragment>

        <NumberComp n={''} />
        <WordAdder />
        {
          showModal &&
          <Modal>
            <div onClick={(e) => {
              e.stopPropagation();
              setShowModal(false);
            }} style={{ background: "#ffffff" }}>我是一个modal</div>
          </Modal>
        }
        <button onClick={() => {
          setShowModal(!showModal)
        }}>显示或隐藏modal</button>

        <TestRef />
      </ErrorBoundary >
    </Profiler>
  );
}

export default TestAdvacedGuides;