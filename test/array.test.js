test("array simple", () => {
  const name = ["muhamad", "ilham", "mubarrok"];
  expect(name).toContain("ilham");
  expect(name).toEqual(["muhamad", "ilham", "mubarrok"]);
});

test("array object", ()=> {
    const name = [
        {name : "ilham"},
        {name : "ahmad"}
    ]

    expect(name).toContainEqual({name : "ilham"})
})
