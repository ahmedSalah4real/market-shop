import { dbconnection } from "../../database/dbConnection.js";
import bcrypt from 'bcrypt';
import { hashSync } from "bcrypt";

const conection = dbconnection();
export const checkMail = (req, res, next) => {
  conection.execute(
    `select email from customers where email = '${req.body.email}'`, (err, data) => {
     
      if (data.length != 0)return res.status(409).json({ message: "email is already exised" });
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      next();
    }
  );
};
