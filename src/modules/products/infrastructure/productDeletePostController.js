import Product from '../domain/Product.js';


export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id);
        res.status(200).json({ status: "Product Deleted" });
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
