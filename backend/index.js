import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';


// configurations
dotenv.config({ path: './.env' });
const app = express();
// app.use(express.json);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/students', studentRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.listen(5000, () => { console.log('500') })



