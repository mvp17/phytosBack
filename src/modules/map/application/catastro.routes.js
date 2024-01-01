import { Router } from 'express';
import { TokenValidation } from '../../../core/verifyToken.js';
import { getCatastroProvinces } from '../infrastructure/catastro/catastroProvincesGetController.js';
import { getCatastroMunicipalities } from '../infrastructure/catastro/catastroMunicipalitiesGetController.js';
import { getNonProtectedCatastroData } from '../infrastructure/catastro/nonProtectedCatastroGetController.js';


const router = Router();

router.get("/getNonProtectedCatastroData", TokenValidation, getNonProtectedCatastroData);
router.get("/getCatastroProvinces", TokenValidation, getCatastroProvinces);
router.get("/getCatastroMunicipalities/:province", TokenValidation, getCatastroMunicipalities);

export default router;
