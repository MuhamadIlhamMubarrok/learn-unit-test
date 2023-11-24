test("strings", () => {
  const value = "muhamad ilham mubarrok";

  expect(value).toBe("muhamad ilham mubarrok");
  expect(value).toMatch(/ham/);
  expect(value).not.toMatch(/asd/);
});
