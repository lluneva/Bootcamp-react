import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Register, { sum } from "./Register";

describe("Register component", () => {
  const component = shallow(<Register />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("changes state when onInputChange is called", () => {
    expect(component.state().email).toEqual("");

    component
      .instance()
      .onInputChange({ target: { name: "email", value: "mock value" } });

    expect(component.state().email).toEqual("mock value");
  });

  it("sum return 7 if given parameters are 3 and 4", () => {
    expect(sum(3, 4)).toEqual(7);
  });
});