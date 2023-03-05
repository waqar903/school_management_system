import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import studentRoutes from './routes/studentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { dbConnect } from './config/dbConnect.js';

dotenv.config({ path: './.env' });
dbConnect();
const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/api/students', studentRoutes);

app.use(errorHandler);


app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) });