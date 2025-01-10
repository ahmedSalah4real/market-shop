import { Router } from "express";
import { addproduct, totalRevOfCategories } from "./product.controler.js";

const productRouter = Router();


productRouter.post("/add", addproduct)
productRouter.get ("/rev",totalRevOfCategories)



export default productRouter;