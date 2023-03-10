import { v4 as uuidv4 } from 'uuid';
import asyncHandler from 'express-async-handler';
import { studentSchema } from '../models/studentModel.js';

// @description Mockup DB
let MOCK_STUDENTS = [
    { id: 1, name: "John Doe", age: 25, rollno: "F23-1001" },
    { id: 2, name: "Johnny David", age: 25, rollno: "F23-1002" },
    { id: 3, name: "Johnas Doe", age: 25, rollno: "F23-1003" },
];

// @description Get all Students
// @route Get -> /api/students 
// @accessor public
export const getStudents = asyncHandler((req, res) => {
    const students = studentSchema.find()
    res.send(students);
});

// @description Add a Student
// @route Get -> /api/students 
// @accessor public
export const addStudent = asyncHandler(async (req, res) => {
    const new_student = {
        ...req.body,
        id: uuidv4(),
        rollno: "F23-1004"
    };
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(400);
        throw new Error("All Feilds are Mandetory.")
    }
    MOCK_STUDENTS.push(new_student);
    res.send(`${req.body.name} have been registered as a new student`);
});

// @description Get specific Student
// @route Get -> /api/students:id 
// @accessor public
export const getStudent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const student = MOCK_STUDENTS.find(s => +s.id === +id);
    res.send({ success: true, data: student });
})

// @description update a Student
// @route Get -> /api/students:id 
// @accessor public
export const updateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    let studentFound = MOCK_STUDENTS.find(s => +s.id === +id);
    if (!name || !age) {
        res.status(400);
        throw new Error("Atleast one Feild is Mandetory.")
    }
    if (name) studentFound.name = name;
    if (age) studentFound.age = age;
    res.send('updated a students');
})

// @description delete a Student
// @route Get -> /api/students:id 
// @accessor public
export const deleteStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    MOCK_STUDENTS = MOCK_STUDENTS.filter(s => +s.id !== +id);
    res.send('deleted a students');
})
