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

export const createProject = (req: Request, res: Response) => {
	const { name, description } = req.body;
	if (!name || !description) {
		return res
			.status(400)
			.json({ error: 'Name and description are required' });
	}

	try {
		const sql = 'INSERT INTO Projects (name, description) VALUES (?, ?)';
		const result = db.run(sql, [name, description]);
		res.status(201).json({ id: result.lastInsertRowid, name, description });
	} catch (error) {
		res.status(500).json({ error: 'Failed to create project' });
	}
};

export const updateProject = (req: Request, res: Response) => {
	const { id } = req.params;
	const { name, description } = req.body;

	if (!name || !description) {
		return res
			.status(400)
			.json({ error: 'Name and description are required' });
	}

	try {
		const sql =
			'UPDATE Projects SET name = ?, description = ? WHERE id = ?';
		const result = db.run(sql, [name, description, id]);
		if (result.changes === 0) {
			return res.status(404).json({ error: 'Project not found' });
		}
		res.status(200).json({ id, name, description });
	} catch (error) {
		res.status(500).json({ error: 'Failed to update project' });
	}
};
