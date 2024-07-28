import { Router } from 'express';
import * as reportController from '../controllers/reportController';

const router = Router();

router.get('/', reportController.getAllReports);
router.get('/projects/:projectId/$', reportController.getReportsByProjectId);
router.post('/projects/:projectId', reportController.createReport);
router.delete('/:id', reportController.deleteReport);
router.get('/single/:id', reportController.getReportById);





export default router;