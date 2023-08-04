
import { hash } from "bcryptjs"
import { findUserByEmail, insertUser } from "../../../../database/user"
//import {register} from '../../../modules/sendmail/email';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body

    const userExists = await findUserByEmail(email)

    if (userExists)
      return res
        .status(422)  // validation error  400:  invalid syntax (e.g. parsing error)
        .json({ message: "email " + email + " already exists" })

    const obj = {
      email: email,
      password: await hash(password, 12),
      name: name
      // country: country
    }

    const insert = await insertUser(obj)

    //  register(obj);

    res.status(201).json({ message: "User created", ...insert })
  
}
}
export default handler
