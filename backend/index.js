import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';


// configurations
dotenv.config({path: './.env'});
const app = express();
app.use(express.json);
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/api/students', studentRoutes);
app.use(errorHandler);




// mongoose setup to be uncommented upon add of the mongo url & port inside the .env

// const PORT = process.env.PORT || 6001;
// mongoose.connect(process.env.MONGO_URL, {
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=>{
//     app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`));
// }).catch((error)=>console.log(`${error} did not connect`));



