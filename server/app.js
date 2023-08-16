const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const mysql = require("mysql");

const app = express();
const port = 3005;
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bankas4",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.post("/accounts", (req, res) => {
  const sql = `
  INSERT INTO accounts (name, surname, sum, blocked, row, img)
  VALUES (?, ?, ?, ?, ?, ?)

  `;

  con.query(
    sql,
    [
      req.body.name,
      req.body.surname,
      req.body.sum,
      req.body.blocked,
      req.body.row,
      req.body.img,
    ],
    (err) => {
      if (err) throw err;
      res.json({});
    }
  );
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
