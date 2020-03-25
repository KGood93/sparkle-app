import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Entry from './Entry';

describe('Entry Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Entry />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});