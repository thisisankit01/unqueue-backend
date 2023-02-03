import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/submit/admin", cors(), (req, res) => {
  console.log(req.body);
});

app.post("/submit/qid", cors(), (req, res) => {
  //   checkValidQID();
  console.log(req.body);
});

app.post("/login", cors(), (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
