import { helloAsync } from "../src/async";

test("async", async () => {
  const result = await helloAsync("ilham");
  expect(result).toBe("hallo ilham");
});

test("async 2", async () => {
  await expect(helloAsync("eko")).resolves.toBe("hallo eko");
  await expect(helloAsync()).rejects.toBe("name is empty");
});
