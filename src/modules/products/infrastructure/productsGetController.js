import Product from '../domain/Product.js';


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
