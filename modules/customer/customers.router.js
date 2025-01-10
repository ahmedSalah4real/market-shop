import { Router } from "express";
import { signin, signup } from "./customer.controlers.js";
import { checkMail } from "../../modules/middelwear/checkMailExist.js";
import { checkSignin } from "../middelwear/checkSignIn.js";
const customerRouter = Router();

customerRouter.post("/signup", checkMail , signup);
customerRouter.post("/signin", checkSignin , signin);

export default customerRouter;
