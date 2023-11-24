test("test toBe", () => {
  const name = "Eko";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Eko");
});

test("test toEqual", () => {
  let person = { id: "budi" };
  Object.assign(person, { name: "ilham" });

  expect(person).toStrictEqual({id:"budi", name:"ilham"})
});
