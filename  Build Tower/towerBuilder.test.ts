import { towerBuilder } from "./towerBuilder";


describe("towerBuilder function", () => {
  it(`returns the correct output for 1 => ["*"]`, () => {
    expect(towerBuilder(1)).toEqual(["*"]);
  });
  it(`returns the correct output for 2 => [" * ","***"]`, () => {
    expect(towerBuilder(2)).toEqual([" * ","***"]);
  });
  it(`returns the correct output for 3 => ["  *  "," *** ","*****"]`, () => {
    expect(towerBuilder(3)).toEqual(["  *  "," *** ","*****"]);
  });
});
