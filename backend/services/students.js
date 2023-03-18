import { query } from "./db.js";
import { helper } from "../helper/helper.js";
import { config } from "../config/config.js";

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await query(
        `SELECT id, firstname, lastname, age 
        FROM students LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta,
    };
}

async function create(student) {
    const result = await query(
        `INSERT INTO students 
        (firstname, lastname, age) 
        VALUES 
        ("${student.firstname}", "${student.lastname}", "${student.age}")`
    );

    let message = "Error in creating student";

    if (result.affectedRows) {
        message = "student created successfully";
    }

    return { message };
}

async function update(id, student) {
    const result = await query(
        `UPDATE students 
    SET firstname="${student.firstname}", lastname="${student.lastname}", age="${student.age}"
    WHERE id=${id}`
    );

    let message = "Error in updating student";

    if (result.affectedRows) {
        message = "student updated successfully";
    }

    return { message };
}

async function remove(id) {
    const result = await query(
        `DELETE FROM students WHERE id=${id}`
    );

    let message = "Error in deleting student";

    if (result.affectedRows) {
        message = "student deleted successfully";
    }

    return { message };
}

async function getStudent(id) {
    const result = await query(
        `SELECT * FROM students WHERE id=${id}`
    );

    const data = helper.emptyOrRows(result);

    return data;
}
export const student = { getMultiple, create, update, remove, getStudent }