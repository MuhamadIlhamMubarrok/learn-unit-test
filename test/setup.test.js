import { sum } from "../src/sum";

afterAll(() => {
  console.info("after each");
});

beforeAll(() => {
  console.info("before each");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
});
test("second test", () => {
  expect(sum(10, 20)).toBe(30);
});
