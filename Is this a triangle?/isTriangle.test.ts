import { isTriangle } from "./isTriangle";


describe("isTriangle function", () => {
  it("returns the correct output for (1,2,2) => true", () => {
    expect(isTriangle(1, 2, 2)).toEqual(true);
  });
  it("returns the correct output for (7,2,2) => false", () => {
    expect(isTriangle(7,2,2)).toEqual(false);
  });
});
