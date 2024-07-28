import { Router } from 'express';
import * as projectController from '../controllers/projectController';

const router = Router();

router.get('/', projectController.getAllProjects);



export default router;