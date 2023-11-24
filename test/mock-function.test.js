import { calculate, calculateAndReturn } from "../src/sum";

test("mock functions calculate", () => {
  let callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(3);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(40);
  expect(callback.mock.calls[2][0]).toBe(50);
  console.info(callback.mock.calls);
});

test("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
  

  console.info(callback.mock.calls);
});

test("test mock implementation")
