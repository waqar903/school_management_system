const express = require('express');

const app = express();


const PORT = 5000;

app.get('/', (req, res) => {
    console.log('Hello helo')
    res.send("HEllo");
});

app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})