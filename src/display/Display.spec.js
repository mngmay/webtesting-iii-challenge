// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display, { asyncFunc } from "./Display";
import { truncate } from "fs";

describe("<Display />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("display closed if the closed prop is true", () => {
    const status = {
      closed: true
    };

    const { queryByText } = render(<Display closed={status.closed} />);

    expect(queryByText(/closed/i)).toBeTruthy();
    expect(queryByText(/open/i)).toBeFalsy();
  });

  it("display open if closed prop is false", () => {
    const status = {
      closed: false
    };

    const { queryByText } = render(<Display closed={status.closed} />);

    expect(queryByText(/open/i)).toBeTruthy();
    expect(queryByText(/closed/i)).toBeFalsy();
  });

  it("display locked if the locked prop is true", () => {
    const status = {
      locked: true
    };

    const { queryByText } = render(<Display locked={status.locked} />);

    expect(queryByText("Locked")).toBeTruthy();
    expect(queryByText(/unlocked/i)).toBeFalsy();
  });

  it("display unlocked if locked prop is false", () => {
    const status = {
      locked: false
    };

    const { queryByText } = render(<Display locked={status.locked} />);

    expect(queryByText(/unlocked/i)).toBeTruthy();
    expect(queryByText("Locked")).toBeFalsy();
  });
  it("when locked or closed, uses red-led class", () => {});

  it("when locked or closed, uses green-led class", () => {});
});
