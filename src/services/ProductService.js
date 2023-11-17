import axios from 'axios';

class ProductService {
    static getAllProducts = () => axios.get('/products');
    static getSignleProduct = (id) => axios.get(`/products/${id}`);
}

export default ProductService;