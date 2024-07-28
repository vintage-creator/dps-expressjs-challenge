import { Router } from 'express';
import * as reportController from '../controllers/reportController';

const router = Router();

router.get('/', reportController.getAllReports);
router.get('/projects/:projectId/$', reportController.getReportsByProjectId);



export default router;