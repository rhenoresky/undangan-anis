import dotenv from "dotenv"
import mysql from "mysql2/promise"

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).end();

    dotenv.config()
    const connection = await mysql.createConnection(process.env.DATABASE_URL)
    const query = "SELECT * FROM kehadiran";
    const [semua] = await connection.query(query);
    res.status(200);
    res.json({
        message: 'data kehadiran',
        kehadiran: semua
    });
}