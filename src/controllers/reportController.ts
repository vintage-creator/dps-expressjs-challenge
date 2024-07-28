import { Request, Response } from 'express';
import db from '../services/db.service';
import { Report } from '../models/reportModel';

export const getAllReports = (req: Request, res: Response) => {
	try {
		const reports = db.query('SELECT * FROM Reports');
		res.json(reports);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch reports' });
	}
};

export const getReportsByProjectId = (req: Request, res: Response) => {
	const { projectId } = req.params;
	try {
		const sql = 'SELECT * FROM Reports WHERE projectid = ?';
		const reports = db.query(sql, [projectId]);
		if (!reports || reports.length === 0) {
			return res.status(404).json({ error: 'Report not found' });
		}
		res.status(200).json(reports);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch reports' });
	}
};

export const createReport = (req: Request, res: Response) => {
	const { projectId } = req.params;
	const { text } = req.body;

	if (!text) {
		return res.status(400).json({ error: 'Text is required' });
	}

	try {
		const sql = 'INSERT INTO Reports (text, projectid) VALUES (?, ?)';
		const result = db.run(sql, [text, projectId]);
		res.status(201).json({
			id: result.lastInsertRowid,
			text,
			projectid: projectId,
		});
	} catch (error) {
		res.status(500).json({ error: 'Failed to create report' });
	}
};

export const deleteReport = (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const sql = 'DELETE FROM Reports WHERE id = ?';
		const result = db.run(sql, [id]);
		if (result.changes === 0) {
			return res.status(404).json({ error: 'Report not found' });
		}
		res.status(204).end();
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete report' });
	}
};

export const getReportById = (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const sql = 'SELECT * FROM Reports WHERE id = ?';
		const report = db.query(sql, [id]);
		if (!report) {
			return res.status(404).json({ error: 'Report not found' });
		}
		res.json(report);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch report' });
	}
};

export const updateReport = (req: Request, res: Response) => {
	const { id } = req.params;
	const { text, projectid } = req.body;

	if (!text || !projectid) {
		return res
			.status(400)
			.json({ error: 'Text and projectId are required' });
	}

	try {
		const sql = 'UPDATE Reports SET text = ?, projectid = ? WHERE id = ?';
		db.run(sql, [text, projectid, id]);
		res.status(200).json({ id, projectid, text });
	} catch (error) {
		res.status(500).json({ error: 'Failed to update report' });
	}
};
