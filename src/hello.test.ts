import { describe, expect, it } from "vitest";
import { greet } from "./hello.js";

describe("greet", () => {
  it("returns Hello, <name>! for a normal name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });

  it("trims surrounding whitespace", () => {
    expect(greet("  Ada  ")).toBe("Hello, Ada!");
  });

  it('returns "Hello!" for an empty string', () => {
    expect(greet("")).toBe("Hello!");
  });

  it('returns "Hello!" for whitespace-only input', () => {
    expect(greet("   ")).toBe("Hello!");
  });
});
