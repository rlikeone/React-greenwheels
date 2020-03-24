import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

test("Testing...", () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
  // let component = renderer.create(<App />).getInstance();
  // let tree = component.dataFunction();

  // expect(tree).toBe(11);
})