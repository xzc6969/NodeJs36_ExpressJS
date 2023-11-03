import express from "express";
import foodRoutes from "./src/routes/foodRoutes.js";
const app = express();
app.use(express.json());
app.use(foodRoutes);
app.listen(8080);

import mysql from "mysql2";
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bai1",
  port: 3307,
});
// app.get("/layDanhSachFood", async (req, res)=>{
//     let sql = "SELECT * FROM food";
//     const listFood = await conn.promise().query(sql);
//     res.send(listFood[0])
// })
// npx sequelize-auto -h localhost -d bai1 -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm
