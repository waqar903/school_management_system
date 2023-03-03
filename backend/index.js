import express from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';


const app = express();
dotenv.config({path: './.env'})

const PORT = process.env.PORT;



app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    console.log('Hello helo')
    res.send("HEllo");
});

app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})