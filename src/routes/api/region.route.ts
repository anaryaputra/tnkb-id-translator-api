/**
 * Required external modules
 */
import express from 'express';
import { RegionController } from '#controllers';

/**
 * Router Initialization
 */
const router: express.Router = express.Router();

/**
 * Region Routes
 */
/** GET Routes */
router.get('/', RegionController.getRegions);

export default router;
