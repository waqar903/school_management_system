import mysql from "mysql2/promise";
import { config } from "../config/config.js";

export const query = async (sql, params) => {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);

    return results;
}
