import express from 'express';
import dotenv from 'dotenv'

const app = express();
dotenv.config({path: './.env'})

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    console.log('Hello helo')
    res.send("HEllo");
});

app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})