import { helloAsync } from "../src/async";

const name = [
  ["ilham", "hallo ilham"],
  ["enrico", "hallo enrico"],
  ["asep", "hallo asep"],
];

it.concurrent.each(name)("concurrent x each funch %s", async (names, expected) => {
   await expect(helloAsync(names)).resolves.toBe(expected);
});
