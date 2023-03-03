import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('get all students');
});

routes.post('/', (req, res) => {
    res.send('add a students');
});

routes.get('/:id', (req, res) => {
    res.send('get specific students');
});

routes.put('/:id', (req, res) => {
    res.send('update a students');
});

routes.delete('/:id', (req, res) => {
    res.send('delete a students');
});


export default routes;