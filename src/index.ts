import express, { Express } from 'express';
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

initializeMiddleware(app);



app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
