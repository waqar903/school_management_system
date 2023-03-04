import express from 'express';

import { getStudents, addStudent, getStudent, updateStudent, deleteStudent } from '../controllers/studentRoutes.js';


const routes = express.Router();

routes.get('/', getStudents);

routes.post('/', addStudent);

routes.get('/:id', getStudent);

routes.put('/:id', updateStudent);

routes.delete('/:id', deleteStudent);


export default routes;