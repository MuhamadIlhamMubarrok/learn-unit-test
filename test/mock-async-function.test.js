import { getBalance } from "../src/async";

test("mock async functions", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("Eko", from)).resolves.toEqual({
    name: "Eko",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("ups"));

  await getBalance("Eko", from);
});

test.failing("mock async function rejected matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("rejected"));

  await expect(getBalance("eko", from)).rejects.toBe("rejected");
});
