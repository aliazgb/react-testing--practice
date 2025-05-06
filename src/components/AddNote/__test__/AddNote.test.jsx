import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AddNote from "../AddNote";
const mockedSetTodos = vi.fn();
test("Input Test", () => {
  render(<AddNote setTodos={mockedSetTodos} todos={[]} />);
  const mang = screen.getByLabelText("Todo");
  fireEvent.click(mang);
  fireEvent.change(mang, { target: { value: "sik" } });
  expect(mang.value).toBe("sik");
});
test("Input Test 1", () => {
  render(<AddNote setTodos={mockedSetTodos} todos={[]} />);
  const mang = screen.getByLabelText("Todo");
  fireEvent.click(mang);
  fireEvent.change(mang, { target: { value: "Add Todo" } });
  const btn =screen.getByRole("button",{name:/Add Todo/i})
  fireEvent.click(btn)
  expect(mang.value).toBe("");
});
