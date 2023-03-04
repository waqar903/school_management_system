import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const routes = express.Router();

let MOCK_STUDENTS = [
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
    res.send(`${req.body.name} have been registered as a new student`);
});

routes.get('/:id', (req, res) => {
    const id = req.params.id;
    const student = MOCK_STUDENTS.find(s => +s.id === +id);
    res.send(student);
});

routes.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, age } = req.body;
    let studentFound = MOCK_STUDENTS.find(s => +s.id === +id);
    if(name) studentFound.name = name;
    if(age) studentFound.age = age;
    res.send('updated a students');
});

routes.delete('/:id', (req, res) => {
    const {id} = req.params;
    MOCK_STUDENTS = MOCK_STUDENTS.filter(s => +s.id !== +id);
    res.send('deleted a students');
});


export default routes;