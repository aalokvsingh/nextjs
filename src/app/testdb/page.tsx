import pool from "@/config/db.js";

export default async function dbquery() {
 const result = await pool.query("SELECT * FROM users");
 console.log(result.rows)
 return (
    <h1>Db query{JSON.stringify(result.rows[0], null,2)}</h1>
 );   
}