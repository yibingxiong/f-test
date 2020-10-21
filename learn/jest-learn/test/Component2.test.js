import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Component2 from '../src/MyComponent';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';


describe('深入学习enzyme shallow', () => {
    let wraper = shallow(<Component2 />);
    describe('find', () => {
        test('class', () => {
            let s = wraper.find('.star');
            console.log(s);
            expect(s).toHaveLength(3);
        });

        // test('id', () => {
        //     let aaa = wraper.find('div#aaaaa');
        //     expect(aaa.length).toBe(1);
        // })

        // test('组件名', () => {
        //     expect(wraper.find(Component2).length).toBe(1);
        // })
    })
})


