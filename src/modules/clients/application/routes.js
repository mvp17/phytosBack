import { Router } from 'express';
import { getClients } from '../infrastructure/clientsGetController.js';
import { createClient } from '../infrastructure/clientCreatePostController.js';
import { updateClient } from '../infrastructure/clientUpdatePostController.js';
import { deleteClient } from '../infrastructure/clientDeletePostController.js';
import { TokenValidation } from '../../../core/verifyToken.js';


const router = Router();

router.get("/", TokenValidation, getClients);
router.post("/", TokenValidation, createClient);
router.put("/:id", TokenValidation, updateClient);
router.delete("/:id", TokenValidation, deleteClient);

export default router;
