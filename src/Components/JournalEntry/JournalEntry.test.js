import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import JournalEntry from './JournalEntry';

describe('JournalEntry Component', () => {
    it(`renders without crashing`, () => {
        const wrapper = shallow(<JournalEntry />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});