import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AddEntry from './AddEntry';

describe('AddEntry Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<AddEntry />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});