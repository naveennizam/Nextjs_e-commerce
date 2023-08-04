
import { createPool } from "mysql2/promise"
let client = undefined;

export async function connectToDatabase() {
  if (client) return client

  client = await createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE
  })

  return client
}

