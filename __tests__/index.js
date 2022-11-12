const sum = (a, b) => a + b;

describe("sum function", () => {
  it("should work", () => {
    const result = sum(3, 5);
    expect(result).toBe(8);
  });
});
