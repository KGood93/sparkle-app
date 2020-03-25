import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Journal from './Journal';


describe('Journal Component', () => {
    it("renders the complete journal", () => {
        //mock context React testing mock context
        const wrapper = shallow(<Journal />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});