import { dbconnection } from "../../database/dbConnection.js";

const conection = dbconnection();


const addproduct = (req,res)=>{
     conection.query("insert into products set ?", req.body);
     res.status(201).json({ message: "product has been added" });

}


const totalRevOfCategories = (req,res)=>{
        conection.execute(`SELECT category , unit_price , sum(unit_price) as "total revneus" FROM products GROUP BY category;`,(err,data)=>{
            if (err) return res.json({message:"connot receive data"});
            res.status(200).json({totalRev:data});
    })


}




export { addproduct, totalRevOfCategories };