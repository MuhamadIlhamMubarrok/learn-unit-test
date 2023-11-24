export const helloAsync = (name) => {
  return new Promise((res, err) => {
    setTimeout(() => {
      if (name) {
        res(`hallo ${name}`);
      } else {
        err("name is empty");
      }
    }, 1000);
  });
};

export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance,
  };
};
