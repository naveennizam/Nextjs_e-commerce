import { premiumPieceDress, getCount } from "../../../database/productTable"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const table = 'premium_lawn'
    // console.log(req.query);
    let getLimit = Object.values(req.query);
    let limit = (parseInt(getLimit[1]));

    let value = Object.values(req.query);
    let skip = (parseInt(value[2]));


    let count = await getCount(table)
    count = (count[0].total);

    let data = await premiumPieceDress(skip, limit)

    res.status(200).json({ data, count });

  } else {
    return res.status(405).json({ message: "Method not allowed." })
  }
}

export default handler