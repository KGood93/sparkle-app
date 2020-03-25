import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import EntryMain from './EntryMain';

describe('EntryMain Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<EntryMain />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});