// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("displays buttons to toggle closed and locked", () => {});
  it("displays change in text when buttons are clicked based on state", () => {});
  it("disables closed toggle button if gate is locked", () => {});
  it("disables locked toggle button if gate is open", () => {});
});
