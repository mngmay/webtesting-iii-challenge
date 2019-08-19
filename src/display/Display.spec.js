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
    const state = {
      closed: true
    };

    const { queryByText } = render(<Display closed={state.closed} />);

    expect(queryByText(/closed/i)).toBeTruthy();
    expect(queryByText(/open/i)).toBeFalsy();
  });

  it("display open if closed prop is false", () => {
    const state = {
      closed: false
    };

    const { queryByText } = render(<Display closed={state.closed} />);

    expect(queryByText(/open/i)).toBeTruthy();
    expect(queryByText(/closed/i)).toBeFalsy();
  });

  it("display locked if the locked prop is true", () => {
    const state = {
      locked: true
    };

    const { queryByText } = render(<Display locked={state.locked} />);

    expect(queryByText("Locked")).toBeTruthy();
    expect(queryByText(/unlocked/i)).toBeFalsy();
  });

  it("display unlocked if locked prop is false", () => {
    const state = {
      locked: false
    };

    const { queryByText } = render(<Display locked={state.locked} />);

    expect(queryByText(/unlocked/i)).toBeTruthy();
    expect(queryByText("Locked")).toBeFalsy();
  });
  it("when locked or closed, uses red-led class", () => {
    const state = {
      locked: true,
      closed: true
    };

    const display = render(
      <Display closed={state.closed} locked={state.locked} />
    );
    const locked = display.getByTestId("isLocked");
    const open = display.getByTestId("isOpen");
    const redOpen = open.classList.contains("red-led");
    const redLocked = locked.classList.contains("red-led");
    const greenOpen = open.classList.contains("green-led");
    const greenLocked = locked.classList.contains("green-led");
    expect(redOpen).toBeTruthy();
    expect(redLocked).toBeTruthy();
    expect(greenOpen).toBeFalsy();
    expect(greenLocked).toBeFalsy();
  });

  it("when unlocked or opened, uses green-led class", () => {
    const state = {
      locked: false,
      closed: false
    };

    const display = render(
      <Display closed={state.closed} locked={state.locked} />
    );
    const locked = display.getByTestId("isLocked");
    const open = display.getByTestId("isOpen");
    const redOpen = open.classList.contains("red-led");
    const redLocked = locked.classList.contains("red-led");
    const greenOpen = open.classList.contains("green-led");
    const greenLocked = locked.classList.contains("green-led");
    expect(greenOpen).toBeTruthy();
    expect(greenLocked).toBeTruthy();
    expect(redOpen).toBeFalsy();
    expect(redLocked).toBeFalsy();
  });
});
