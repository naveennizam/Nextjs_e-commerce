import { connectToDatabase } from "./connection"

export const findProductById = async (id: number) => {
  let client = await connectToDatabase()
  let table = "products"

  const [rows, fields] = await client.query("SELECT * FROM " + table + " WHERE ProductId = ?", [id])

  return rows[0]
}

export const onePieceDress = async () => {
  let client = await connectToDatabase()
  let table = "products"

  const [rows, fields] = await client.query("SELECT * FROM " + table + " WHERE  prodName = '1PC lawn Unstitch Printed'")

  return rows
}



export const twoPieceDress = async () => {
  let client = await connectToDatabase()
  let table = "products"

  const [rows, fields] = await client.query("SELECT * FROM " + table + " WHERE  prodName = '2PC lawn Unstitch Printed'"
  )
  return rows
}

export const threePieceDress = async () => {
  let client = await connectToDatabase()
  let table = "products"

  const [rows, fields] = await client.query("SELECT * FROM " + table + " WHERE  prodName = '3PC lawn Unstitch Printed'")

  return rows
}

export const premiumPieceDress = async (skip: number, limit: number) => {
  let client = await connectToDatabase()
  let table = "premium_lawn"
  let offset = skip
  let limits = limit
  

  const [rows, fields] = await client.query("SELECT * FROM " + table + "  LIMIT ? OFFSET ? ", [limits, offset])

  return rows
}

export const getCount = async (table: string) => {
  let client = await connectToDatabase()


  const [rows, field] = await client.query(`SELECT COUNT(ProductId) AS total FROM ${table}`)
  return rows
}