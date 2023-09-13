import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
}

test("uses a class component", () => {
  expect(isClassComponent(Item)).toBe(true);
});

test("the <li> has a className of 'in-cart' when inCart state is true", () => {
  render(<Item name="Milk" category="Dairy" />);
  const listItem = screen.getByText("Milk - Dairy");

  // Ensure the initial state is correct
  expect(listItem).toBeInTheDocument();
  expect(listItem).not.toHaveClass("in-cart");

  // Update the 'inCart' state to true (simulate interaction)
  fireEvent.click(listItem);

  // Requery the updated <li> element
  const updatedListItem = screen.getByText("Milk - Dairy");

  // Check if the class name has been updated
  expect(updatedListItem).toHaveClass("in-cart");
});
