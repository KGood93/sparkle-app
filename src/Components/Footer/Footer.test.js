import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

describe('Footer Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});