test("Numbers Matchers", () => {
  let value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3, 4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(5, 4);
});
