import React from "react";
import ReactDOM from "react-dom";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import axios from "axios";
jest.mock("axios");
import App from "./App";
import {
  SearchBox,
  SearchInput,
  AutocompleteOptions
} from "../src/components/index";
import { getLocations } from "./helpers.js";

Enzyme.configure({ adapter: new Adapter() });

describe("test", () => {
  it("test case", () => {
    expect(true).toEqual(true);
  });
});

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("<SearchBox />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("<SearchInput />", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchInput />, div);
  ReactDOM.unmountComponentAtNode(div);

  it("renders an input with the correct props", () => {
    const wrapper = Enzyme.mount(<SearchInput />);
    const selectWrapper = wrapper.find("input");
    expect("name" in selectWrapper.props()).toEqual(true);
    expect("id" in selectWrapper.props()).toEqual(true);
    expect("type" in selectWrapper.props()).toEqual(true);
    expect("placeholder" in selectWrapper.props()).toEqual(true);
    expect("value" in selectWrapper.props()).toEqual(true);
    expect("onChange" in selectWrapper.props()).toEqual(true);
    expect("onKeyUp" in selectWrapper.props()).toEqual(true);
    expect("value" in selectWrapper.props()).toEqual(true);
  });

  it("renders with the correct state", () => {
    const wrapper = Enzyme.mount(<SearchInput />);
    expect("showOptions" in wrapper.state()).toEqual(true);
    expect("matchedOptions" in wrapper.state()).toEqual(true);
    expect("value" in wrapper.state()).toEqual(true);
  });

  it("calls the onChange function when the input value changes", () => {
    const onChange = sinon.spy();
    const wrapper = Enzyme.mount(<SearchInput />);
    const selectWrapper = wrapper.find("input");
    selectWrapper.simulate("change", {
      target: { value: "hi" }
    });
    expect(onChange.called).toBe.true;
  });
});

describe("<AutocompleteOptions />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a list with the correct props", () => {
    const wrapper = Enzyme.mount(
      <AutocompleteOptions
        isFetching={false}
        showOptions={false}
        matchedOptions={[]}
        value=""
      />
    );
    expect("isFetching" in wrapper.props()).toEqual(true);
    expect("matchedOptions" in wrapper.props()).toEqual(true);
    expect("showOptions" in wrapper.props()).toEqual(true);
    expect("value" in wrapper.props()).toEqual(true);
  });
});

describe("onChange", () => {
  it("it should set `show options` to true when called", () => {
    const wrapper = Enzyme.shallow(<SearchInput />);
    const e = { currentTarget: { value: "ma" }, preventDefault: () => {} };
    const instance = wrapper.instance();
    expect(wrapper.state("showOptions")).toBe(false);
    instance.onChange(e);
    expect(wrapper.state("showOptions")).toBe(true);
  });
});

describe("onClick", () => {
  it("it should set `show options` to false when called", () => {
    const wrapper = Enzyme.shallow(<SearchInput />);
    const e = { currentTarget: { value: "ma" }, preventDefault: () => {} };
    wrapper.setState({ showOptions: true });
    const instance = wrapper.instance();
    expect(wrapper.state("showOptions")).toBe(true);
    instance.onClick(e);
    expect(wrapper.state("showOptions")).toBe(false);
  });
});

