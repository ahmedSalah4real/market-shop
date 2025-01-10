import customerRouter from "./modules/customer/customers.router.js";
import { checkMail } from "./modules/middelwear/checkMailExist.js";
import { app } from "./app.js";

app.use("/auth", checkMail, customerRouter);
