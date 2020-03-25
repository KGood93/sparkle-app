import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Quote from './Quote';

describe('Quote Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Quote />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});