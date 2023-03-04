import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const routes = express.Router();

const MOCK_STUDENTS = [
    {id: 1, name: "John Doe", age: 25, rollno:"F23-1001"},
    {id: 2, name: "Johnny David", age: 25, rollno:"F23-1002"},
    {id: 3, name: "Johnas Doe", age: 25, rollno:"F23-1003"},
];



routes.get('/', (req, res) => {
    const students = MOCK_STUDENTS;
    res.send(students);
});

routes.post('/', (req, res) => {
    const new_student = {
        ...req.body,
        id: uuidv4(),
        rollno: "F23-1004"
    };
    MOCK_STUDENTS.push(new_student);
    console.log('new_student', new_student);
    res.send(`${req.body.name} have been registered as a new student`);
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