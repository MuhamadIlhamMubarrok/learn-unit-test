import { sayHello } from "../src/sayHello";

test("sayHello succes", () => {
  expect(sayHello("ilham")).toBe("hallo ilham");
});
test.failing("sayHello not succes", () => {
  sayHello(null);
});
test("sayHello not succes 2", () => {
  expect(() => sayHello(null)).toThrow();
});
