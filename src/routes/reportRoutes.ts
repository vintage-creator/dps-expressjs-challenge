import { Router } from 'express';
import * as reportController from '../controllers/reportController';

const router = Router();

router.get('/', reportController.getAllReports);



export default router;