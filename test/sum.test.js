import { sum, sumAll } from "../src/sum";

test("sum(1, 2) must be 3 ", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("sum(1, 2) must be 3 #2 ", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("sum all", ()=> {
  const numbers = [1,1,1,1,1]
  expect(sumAll(numbers)).toBe(5)
})

