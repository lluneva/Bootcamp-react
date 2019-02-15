import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"
import PostCard from "./PostCard";

// param1 = what is tested, param2 = function
// shallow = testing just one component
describe("Postcard Component", () => {
  const component = shallow(<PostCard />);
  it("renders properly", () => {
    expect(component.length).toBe(1);
  });
});


