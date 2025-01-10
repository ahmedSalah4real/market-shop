import { dbconnection } from "../../database/dbConnection.js";
import bcrypt from 'bcrypt';

const conection = dbconnection();

const signup = (req, res) => {


          conection.query("insert into customers set ?", req.body);
          res.status(201).json({ message: "success" });
};




const signin = (req, res) => {
  res.json({ message: "signin" });

      }
      


 
export { 
    signup,
    signin

 };
