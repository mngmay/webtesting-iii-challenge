// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("displays buttons to toggle closed and locked", () => {
    const controls = render(<Controls />);
    const lockedBtn = controls.getByTestId("lockedBtn");
    const openBtn = controls.getByTestId("openBtn");

    expect(lockedBtn).toBeTruthy();
    expect(openBtn).toBeTruthy();
  });
  it("displays change in text when buttons are clicked based on state", () => {
    //have to use Dashboard not controls because Dashboard holds state?
    const dashboard = render(<Dashboard />);
    const lockedBtn = dashboard.getByTestId("lockedBtn");
    const openBtn = dashboard.getByTestId("openBtn");

    expect(openBtn.textContent).toEqual("Close Gate");
    expect(lockedBtn.textContent).toEqual("Lock Gate");

    fireEvent.click(openBtn);
    expect(openBtn.textContent).toEqual("Open Gate");
    fireEvent.click(lockedBtn);
    expect(lockedBtn.textContent).toEqual("Unlock Gate");
  });
  it("disables closed toggle button if gate is locked", () => {
    const dashboard = render(<Dashboard />);

    const lockedBtn = dashboard.getByTestId("lockedBtn");
    const openBtn = dashboard.getByTestId("openBtn");

    expect(openBtn.textContent).toEqual("Close Gate");
    fireEvent.click(openBtn);
    expect(openBtn.textContent).toEqual("Open Gate");
    fireEvent.click(lockedBtn);
    expect(lockedBtn.textContent).toEqual("Unlock Gate");
    expect(openBtn.textContent).toEqual("Open Gate");
    fireEvent.click(openBtn);
    expect(openBtn.textContent).toEqual("Open Gate");
  });
  it("disables locked toggle button if gate is open", () => {
    const dashboard = render(<Dashboard />);

    const lockedBtn = dashboard.getByTestId("lockedBtn");
    const openBtn = dashboard.getByTestId("openBtn");

    expect(openBtn.textContent).toEqual("Close Gate");
    expect(lockedBtn.textContent).toEqual("Lock Gate");
    fireEvent.click(lockedBtn);
    expect(lockedBtn.textContent).toEqual("Lock Gate");
  });
});
