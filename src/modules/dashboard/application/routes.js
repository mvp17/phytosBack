import { Router } from 'express';
import { TokenValidation } from '../../../core/verifyToken.js';
import { getAllMarkers } from '../infrastructure/markersGetController.js';
import { getAllPolygons } from '../infrastructure/polygonsGetController.js';


const router = Router();

router.get("/openGeoJSONMarkers", TokenValidation, getAllMarkers);
router.get("/openGeoJSONPolygons", TokenValidation, getAllPolygons);

export default router;
