import bcrypt from 'bcrypt'
import { dbconnection } from '../../database/dbConnection.js';
const conection = dbconnection();

export const checkSignin = (req,res,next)=>{
      conection.execute( `select id,email,password from customers where email = '${req.body.email}'`, (err, data) => {
      if (data.length != 0){
       const match = bcrypt.compareSync(req.body.password,data[0].password)
       if (match){
        next();
       }else {
        res.status(409).json({message:"account or password not correct"})
       }
    
    
    }else{
        res.status(409).json({message:"account not founded"})
    }
    
    
    
    })

}

