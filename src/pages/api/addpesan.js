import dotenv from "dotenv"
import mysql from "mysql2/promise"

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    dotenv.config()
    const connection = await mysql.createConnection(process.env.DATABASE_URL)
    const { nama, isi_pesan } = req.body;
    let query = `INSERT INTO pesan (nama, isi_pesan) VALUES (?, ?)`;
    await connection.query(query, [nama, isi_pesan])
    res.status(200);
    res.json({
        message: "Add Succes"
    });
}