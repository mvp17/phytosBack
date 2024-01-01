import { Router } from 'express';
import { getProducts } from '../infrastructure/productsGetController.js';
import { createProduct } from '../infrastructure/productCreatePostController.js';
import { updateProduct } from '../infrastructure/productUpdatePostController.js';
import { deleteProduct } from '../infrastructure/productDeletePostController.js';
import { TokenValidation } from '../../../core/verifyToken.js';


const router = Router();

router.get("/", TokenValidation, getProducts);
router.post("/", TokenValidation, createProduct);
router.put("/:id", TokenValidation, updateProduct);
router.delete("/:id", TokenValidation, deleteProduct);

export default router;
