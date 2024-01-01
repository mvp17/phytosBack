import Product from '../domain/Product.js';


export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(201).json(product);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
