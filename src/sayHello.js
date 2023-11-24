export const sayHello = (name) => {
  if (name) {
    return `hallo ${name}`;
  } else {
    throw new Error("name is not required");
  }
};
