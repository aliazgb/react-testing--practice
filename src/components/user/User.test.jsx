import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import User from "./User";

describe("users", () => {
  test("render currectly", () => {
    render(<User />);
    const heading = screen.getByText("users");
    expect(heading).toBeInTheDocument();
  });
});
