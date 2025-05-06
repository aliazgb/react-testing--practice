import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should render initialstate", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("should render initialstate", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialState: 10 },
    });
    expect(result.current.count).toBe(10);
  });
  test("should increment ", () => {
    const { result } = renderHook(useCounter);
    act(()=>result.current.increament())
    expect(result.current.count).toBe(1);
  });
});
