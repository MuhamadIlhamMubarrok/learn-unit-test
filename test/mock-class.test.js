import { UserRepository } from "../src/userRepository";
import { UserService } from "../src/userService";

jest.mock("../src/userRepository.js");

const repository = new UserRepository();
const service = new UserService(repository);
test("mock user save", () => {
  const user = {
    id: 1,
    name: "ilham",
  };

  service.save(user);
  expect(repository.save).toHaveBeenCalled();
});
