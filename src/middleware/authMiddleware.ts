import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_TOKEN = process.env.AUTH_TOKEN;

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  if (token === AUTH_TOKEN) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
};