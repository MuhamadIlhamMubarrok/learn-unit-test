import { UserRepository } from "./userRepository.js";

export class UserService {
    
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  save(user) {
    this.userRepository.save(user);
  }
  findByid(id) {
    return this.userRepository.findByid(id);
  }
  findAll() {
    return this.userRepository.findAll();
  }
}
