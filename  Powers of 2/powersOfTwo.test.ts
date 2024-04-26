import { powersOfTwo } from "./powersOfTwo";


describe("powersOfTwo function", () => {
  it("returns the correct array for n = 0", () => {
    expect(powersOfTwo(0)).toEqual([1]);
  });

  it("returns the correct array for n = 1", () => {
    expect(powersOfTwo(1)).toEqual([1, 2]);
  });

  it("returns the correct array for n = 4", () => {
    expect(powersOfTwo(4)).toEqual([1, 2, 4, 8, 16]);
  });

});
