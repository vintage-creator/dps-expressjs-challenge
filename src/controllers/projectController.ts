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

export const getProjectById = (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const sql = 'SELECT * FROM Projects WHERE id = ?';
		const project = db.query(sql, [id]);

		if (!project || project.length === 0) {
			return res.status(404).json({ error: 'Project not found' });
		}

		res.json(project[0]);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch project' });
	}
};
