import { getAllProduct, getProductById } from "./database";

export class productService {
    static findById(id){
        return getProductById(id)
    }

    static findAll(){
        return getAllProduct()
    }
}