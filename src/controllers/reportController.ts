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
