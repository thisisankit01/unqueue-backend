import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("Homepage");
});

app.post("/submitAdminForm", cors(), (req, res) => {
  let { orgName, email } = req.body;
  console.log(req.body);
});

app.post("/submitQID", cors(), (req, res) => {
  const { qidValue } = req.body;
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
