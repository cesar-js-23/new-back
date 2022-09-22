const express = require("express");
const product = require("./api/products");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/products", product);

app.listen(PORT, () => console.log(`Server is runnig in port ${PORT}`));
