import { Router } from 'express';
import { TokenValidation } from '../../../core/verifyToken.js';
import { getInstallation } from '../infrastructure/installationGetController.js';
import { createInstallation } from '../infrastructure/installationCreatePostController.js';
import { getInstallations } from '../infrastructure/installationsGetController.js';
import { updateInstallation } from '../infrastructure/installationUpdatePostController.js';
import { deleteInstallation } from '../infrastructure/installationDeletePostController.js';


const router = Router();

router.get("/", TokenValidation, getInstallations);
router.get("/:id", TokenValidation, getInstallation);
router.post("/", TokenValidation, createInstallation);
router.put("/:id", TokenValidation, updateInstallation);
router.delete("/:id", TokenValidation, deleteInstallation);

export default router;
