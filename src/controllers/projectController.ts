import { Request, Response } from 'express';
import db from '../services/db.service';
import { Project } from '../models/projectModel';

export const getAllProjects = (req: Request, res: Response) => {
  try {
    const projects = db.query('SELECT * FROM Projects');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};
