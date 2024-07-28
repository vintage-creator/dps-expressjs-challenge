import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { authenticate } from './middleware/authMiddleware';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware initialization
const initializeMiddleware = (app: Express) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(authenticate); 
};

// Error handling middleware
const initializeErrorHandling = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });
};

initializeMiddleware(app);
initializeErrorHandling(app);


app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
