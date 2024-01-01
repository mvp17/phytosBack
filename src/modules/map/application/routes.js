import { Router } from 'express';
import { TokenValidation } from '../../../core/verifyToken.js';
import { saveMarkersGeoJSON } from '../infrastructure/markersInsertManyPostController.js';
import { saveLineStringsGeoJSON } from '../infrastructure/linestringsInsertManyPostController.js';
import { savePolygonsGeoJSON } from '../infrastructure/polygonsInsertManyPostController.js';
import { deleteGeoJSON } from '../infrastructure/geoJSONDeletePostController.js';
import { getAllMarkers } from '../../dashboard/infrastructure/markersGetController.js';
import { getAllPolygons } from '../../dashboard/infrastructure/polygonsGetController.js';


const router = Router();

router.post("/saveMarkersGeoJSON", TokenValidation, saveMarkersGeoJSON);
router.post("/saveLineStringsGeoJSON/:id", TokenValidation, saveLineStringsGeoJSON);
router.post("/savePolygonsGeoJSON/:id", TokenValidation, savePolygonsGeoJSON);
router.get("/openGeoJSONMarkers", TokenValidation, getAllMarkers);
router.get("/openGeoJSONPolygons", TokenValidation, getAllPolygons);
router.delete("/deleteGeoJSON/:id", TokenValidation, deleteGeoJSON);

export default router;
