import { v4 as uuidv4 } from 'uuid';


let MOCK_STUDENTS = [
    {id: 1, name: "John Doe", age: 25, rollno:"F23-1001"},
    {id: 2, name: "Johnny David", age: 25, rollno:"F23-1002"},
    {id: 3, name: "Johnas Doe", age: 25, rollno:"F23-1003"},
];


export const getStudents = (req, res) => {
    res.send(MOCK_STUDENTS);
}

export const addStudent = (req, res) => {
    const new_student = {
        ...req.body,
        id: uuidv4(),
        rollno: "F23-1004"
    };
    const {name, age} = req.body;
    if(!name || !age) {
        res.status(400);
        throw new Error("All Feilds are Mandetory.")
    } else {

        MOCK_STUDENTS.push(new_student);
        res.send(`${req.body.name} have been registered as a new student`);
    }
}

export const getStudent = (req, res) => {
    const id = req.params.id;
    const student = MOCK_STUDENTS.find(s => +s.id === +id);
    res.send({success: true, data: student});
}

export const updateStudent = (req, res) => {
    const {id} = req.params;
    const {name, age } = req.body;
    let studentFound = MOCK_STUDENTS.find(s => +s.id === +id);
    if(name) studentFound.name = name;
    if(age) studentFound.age = age;
    res.send('updated a students');
}

export const deleteStudent = (req, res) => {
    const {id} = req.params;
    MOCK_STUDENTS = MOCK_STUDENTS.filter(s => +s.id !== +id);
    res.send('deleted a students');
}
