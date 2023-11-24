import { getAllProduct, getProductById } from "../src/database.js";
import { productService } from "../src/serviceProduct.js";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");
  // jika ingin sebagian mock module gunakan cara di atas
  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
    getProductById: jest.fn(),
  };
});

test("mock modules get product by id", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "product mock",
    };
  });
  const product = productService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "product mock",
  });
});

test("mock get all product", () => {
  const product = [
    {
      id: 1,
      name: "product1",
    },
    {
      id: 2,
      name: "product2",
    },
  ];
  getAllProduct.mockImplementation(() => {
    return product;
  });

  expect(productService.findAll()).toEqual(product);
});
