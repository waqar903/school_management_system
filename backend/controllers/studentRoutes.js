import { v4 as uuidv4 } from 'uuid';
import asyncHandler from 'express-async-handler';

import { student } from "../services/students.js";

// @description Mockup DB
let MOCK_STUDENTS = [
    { id: 1, name: "John Doe", age: 25, rollno: "F23-1001" },
    { id: 2, name: "Johnny David", age: 25, rollno: "F23-1002" },
    { id: 3, name: "Johnas Doe", age: 25, rollno: "F23-1003" },
];

// @description Get all Students
// @route Get -> /api/students 
// @accessor public
export const getStudents = asyncHandler(async (req, res) => {
    console.log("getall");
    res.send(await student.getMultiple(req.query.page));
});

// @description Add a Student
// @route Get -> /api/students 
// @accessor public
export const addStudent = asyncHandler(async (req, res) => {
    const { firstname, lastname, age } = req.body;
    if (!firstname || !lastname || !age) {
        res.status(400);
        throw new Error("All Feilds are Mandetory.")
    }
    const data = await student.create(req.body);
    res.send(`${req.body.firstname} have been registered as a new student`);
});

// @description Get specific Student
// @route Get -> /api/students:id 
// @accessor public
export const getStudent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = await student.getStudent(id);

    res.send(data);

})

// @description update a Student
// @route Get -> /api/students:id 
// @accessor public
export const updateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    if (!firstname || !lastname || !age) {
        res.status(400);
        throw new Error("Atleast one Feild is Mandetory.")
    }
    const data = await student.update(id, req.body);
    res.send('updated a students');
})

// @description delete a Student
// @route Get -> /api/students:id 
// @accessor public
export const deleteStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = await student.remove(id);
    res.send('deleted a students');
})
