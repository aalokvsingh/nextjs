import { Pool } from "pg";

const pool = new Pool({
    user: "neondb_owner",
    host: "ep-fancy-mud-a13tszb8-pooler.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    password: "npg_pwxrQ7An0sOc",
    port: 5432,
    max: 10,           // max connections in the pool
    idleTimeoutMillis: 30000, // close idle clients after 30s
    ssl: {
      rejectUnauthorized: false,  // required for self-signed certs
    },
  });

try {
  // Test the connection immediately
  const client = await pool.connect();
  console.log("✅ Database connection successful");
  client.release();
} catch (err) {
  console.log("❌ Database connection failed:", err.message);
}

export default pool;
