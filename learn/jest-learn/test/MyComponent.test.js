import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MyComponent from '../src/MyComponent';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';


describe('enzyme练习', () => {
    describe('shallow', () => {
        test('有一个wraper', () => {
            const wrapper = shallow(<MyComponent />);
            expect(wrapper.find('.wraper')).toHaveLength(1);
        });
        test('有三个star', () => {
            const wraper = shallow(<MyComponent />);
            expect(wraper.find('.star')).toHaveLength(3);
        });
        test('children可以正常显示', () => {
            const dom = shallow(<MyComponent><div className="child"></div></MyComponent>);
            expect(dom.contains('<div className="child"></div>')).toBeTruthy;
        });
        test('测试点击回调调用每调用', () => {
            const onButtonClick = sinon.spy();;
            const wrapper = shallow(<MyComponent onButtonClick={onButtonClick} />);
            wrapper.find('button').simulate('click');
            expect(onButtonClick).toHaveProperty('callCount', 1);
        })
    });

    describe('mount', () => {
        test('props', () => {
            const dom = mount(<MyComponent bar="baz" />);
            expect(dom.props().bar).toBe('baz');
            dom.setProps({ bar: 'foo' });
            expect(dom.props().bar).toBe('foo');
        });

        test('事件触发', () => {
            const onButtonClick = sinon.spy();
            const dom = mount(
                <MyComponent onButtonClick={onButtonClick} />
            );
            dom.find('button').simulate('click');
            expect(onButtonClick).toHaveProperty('callCount', 1);
        });

        test('calls componentDidMount', () => {
            sinon.spy(MyComponent.prototype, 'componentDidMount');
            const wrapper = mount(<MyComponent />);
            expect(MyComponent.prototype.componentDidMount).toHaveProperty('callCount', 1);
            MyComponent.prototype.componentDidMount.restore();
        });
    });

    describe('render', () => {
        it('star有三个', () => {
            const wrapper = render(<MyComponent />);
            expect(wrapper.find('.star')).toHaveLength(3);
        });

        it('renders the title', () => {
            const wrapper = render(<MyComponent title="unique" />);
            expect(wrapper.text()).toMatch('unique');
        });
    })
});