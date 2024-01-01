import Product from '../domain/Product.js';


export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            commonName: req.body.commonName,
            affectedVariety: req.body.affectedVariety,
            productDensityPerHectare: req.body.productDensityPerHectare,
            color: req.body.color
        });

        await newProduct.save();
        res.status(201).json(newProduct);

    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
