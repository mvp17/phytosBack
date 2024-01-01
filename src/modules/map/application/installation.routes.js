import { Router } from 'express';
import { TokenValidation } from '../../../core/verifyToken.js';
import { openGeoJSONMarkersFromInstallation } from '../infrastructure/installation/installationMarkersGetController.js';
import { openGeoJSONLineStringsFromInstallation } from '../infrastructure/installation/installationLinestringsGetController.js';
import { openGeoJSONPolygonsFromInstallation } from '../infrastructure/installation/installationPolygonsGetController.js';


const router = Router();

router.get("/openGeoJSONMarkers/:id", TokenValidation, openGeoJSONMarkersFromInstallation);
router.get("/openGeoJSONLineStrings/:id", TokenValidation, openGeoJSONLineStringsFromInstallation);
router.get("/openGeoJSONPolygons/:id", TokenValidation, openGeoJSONPolygonsFromInstallation);

export default router;
