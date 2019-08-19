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

  //   it("should render a list of recipes provided on props", () => {
  //     const recipesData = [
  //       { name: "test dish1", course: "dish1" },
  //       { name: "test dish2", course: "dish2" },
  //       { name: "test dish3", course: "dish3" }
  //     ];

  //     const test = render(<RecipeList recipes={recipesData} />);
  //     const recipes = test.getAllByTestId("recipe");
  //     expect(recipes).toHaveLength(recipesData.length);
  //   });
  // });

  it("display locked if the locked prop is true and unlocked if otherwise", () => {});

  it("when lcoked or closed, uses red-led class", () => {});

  it("when lcoked or closed, uses green-led class", () => {});
});
