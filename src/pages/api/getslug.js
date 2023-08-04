import { connectToDatabase } from "../../../database/connection"

const handler = async (req, res) => {
    
   
    if (req.method === "GET") {
  
     let slug = Object.values(req.query)[0]
    
       console.log('slug',slug);
  //   let slug = 'Fabric SL-35034'
      let client = await connectToDatabase()
      let table = "premium_lawn"
      const [rows, fields] = await client.query(
        "SELECT * FROM " + table + " WHERE prodCode = ? ",  [slug]
    
      )
      res.json(rows[0])  
    }
    

   else {
    return res.status(405).json({ message: "Method not allowed." })
  }

}

export default handler







// import * as fs from 'fs';

// export default async function handler(req, res) {
    
//     fs.readFile(`onepiece-unstitch/${req.query.slug}.json`,`utf-8`,(err,data)=>{
//         if(err){
//             res.status(500).json({err:`NOT FOUND`})
//         }
//         res.status(200).json(JSON.parse(data))
//     })
// }