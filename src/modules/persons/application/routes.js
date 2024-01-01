import { Router } from 'express';
import { getPersons } from '../infrastructure/personsGetController.js';
import { createPerson } from '../infrastructure/personCreatePostController.js';
import { updatePerson } from '../infrastructure/personUpdatePostController.js';
import { deletePerson } from '../infrastructure/personDeletePostController.js';
import { TokenValidation } from '../../../core/verifyToken.js';

const router = Router();

router.get("/", TokenValidation, getPersons);
router.post("/", TokenValidation, createPerson);
router.put("/:id", TokenValidation, updatePerson);
router.delete("/:id", TokenValidation, deletePerson);

export default router;
