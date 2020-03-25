import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import EntryMain from './EntryMain';

describe('EntryMain Component', () => {
    it(`renders without crashing`, () => {
        const test = {
            path: "/entry/:entryId",
            url: "/entry/32",
            isExact: true,
            params: {entryId: "32"}
        };
        const wrapper = shallow(<EntryMain match={test}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});