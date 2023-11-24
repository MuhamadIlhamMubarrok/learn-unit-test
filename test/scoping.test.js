beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("test outer", () => console.info("Test Outer"));

describe("inner", () => {
  beforeAll(() => console.info("Before All inner"));
  afterAll(() => console.info("After All inner"));
  test("Test Inner", () => console.info("test inner"));
});
