import { maskify } from "./maskify";


describe("maskify function", () => {
  it("returns the correct output for 4556364607935616", () => {
    expect(maskify('4556364607935616')).toEqual(`############5616`);
  });

  it("returns the correct output for 1", () => {
    expect(maskify("1")).toEqual("1");
  });

  it("returns the correct output for 11111", () => {
    expect(maskify("11111")).toEqual(`#1111`);
  });

});
