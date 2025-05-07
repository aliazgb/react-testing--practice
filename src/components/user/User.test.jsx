import { render, screen } from "@testing-library/react";
import { http } from "msw";
import { describe, expect, test } from "vitest";
import { server } from "../mocks/server";
import User from "./User";

describe("users", () => {
  test("render currectly", () => {
    render(<User />);
    const heading = screen.getByText("users");
    expect(heading).toBeInTheDocument();
  });
  test("should have 3 user item", async () => {
    render(<User />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
  test("render error message", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json(null, { status: 404 });
      })
    );
    render(<User />);
    const users = await screen.findByText("Error fetching User");
    expect(users).toBeInTheDocument();
  });
});
