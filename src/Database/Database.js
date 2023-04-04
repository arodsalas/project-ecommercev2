const express = require('express');
const cors = require('cors');
const mysql= require('mysql2');
const app = express();
app.use(express.json());
app.use(cors());
// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'products'
  ,});
    db.connect(err =>{
    if(err){
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});
app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/products", (req, res) => {
  const q = "INSERT INTO products(`name`, `price`, `description`, `image`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.image,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.listen(8800, () => {
  console.log("Connected to backend.");
});