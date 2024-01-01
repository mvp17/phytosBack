import { Router } from 'express';
import { getSeasons } from '../infrastructure/seasonsGetController.js';
import { createSeason } from '../infrastructure/seasonCreatePostController.js';
import { updateSeason } from '../infrastructure/seasonUpdatePostController.js';
import { deleteSeason } from '../infrastructure/seasonDeletePostController.js';
import { TokenValidation } from '../../../core/verifyToken.js';


const router = Router();

router.get("/", TokenValidation, getSeasons);
router.post("/", TokenValidation, createSeason);
router.put("/:id", TokenValidation, updateSeason);
router.delete("/:id", TokenValidation, deleteSeason);

export default router;
