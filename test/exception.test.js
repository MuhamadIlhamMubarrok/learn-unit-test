import { MyException, callMe } from "../src/exception";

test("exception", () => {
  expect(() => callMe("ilham")).toThrow();
  expect(() => callMe("ilham")).toThrow(MyException);
  expect(() => callMe("ilham")).toThrow("ups my exception happens");
});

test("exception not happens", ()=>{
  expect(callMe("budi")).toBe("ok")
})
