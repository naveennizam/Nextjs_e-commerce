
import { connectToDatabase } from "./connection"

export const findUserByEmail = async email => {
  let client = await connectToDatabase()
  let table = "user"

  const [rows, fields] = await client.query(
    "SELECT * FROM " + table + " WHERE email = ?",
    [email]
  )

  //client.end();

  return rows[0]
}

export const findUserById = async id => {
  let client = await connectToDatabase()
  let table = "user"

  const [rows, fields] = await client.query(
    "SELECT * FROM " + table + " WHERE id = ?",
    [id]
  )

  //client.end();

  return rows[0]
}

export const insertUser = async obj => {
  let client = await connectToDatabase()
  let table = "user"

  const insert = await client.query("INSERT INTO " + table + " SET ?", obj)

  //client.end();

  return insert[0]
}

export const updateUser = async (id, obj) => {
  let client = await connectToDatabase()
  let table = "user"

  const update = await client.query(
    "Update " + table + ' SET ? WHERE id = "' + id + '"',
    obj
  )

  //client.end();

  return update
}

export const adminAllUsers = async skip => {
  let client = await connectToDatabase()
  let table = "user"
  let limit = 10
  let offset = skip

  const [
    rows,
    fields
  ] = await client.query(
    "SELECT id, email, role, socialOwner, name, lastLogin, createdAt, ip, country, phone, isActive FROM " +
      table +
      " order by id desc LIMIT ?  OFFSET ?",
    [limit, offset]
  )

  //client.end();

  return rows
}

export const getCount = async () => {
  let client = await connectToDatabase()
  let table = "user"

  const [rows, fields] = await client.query(
    "SELECT COUNT(id) AS total FROM " + table
  )

  //client.end();

  return rows
}
