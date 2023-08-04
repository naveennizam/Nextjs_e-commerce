import { onePieceDress } from "../../../database/productTable"

const handler = async (req, res) => {
  if (req.method === "GET") {

    let data = await onePieceDress()
    res.status(200).json(data);


  } else {
    return res.status(405).json({ message: "Method not allowed." })
  }
}

export default handler
