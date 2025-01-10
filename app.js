import express from 'express';
import customerRouter from './modules/customer/customers.router.js'
import productRouter from './modules/product/product.router.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use("/auth", customerRouter);
app.use("/user", productRouter )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
