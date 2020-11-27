import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl =
  "mongodb+srv://admin:k1GpK2QgUpfnlpeq@cluster0.d5scz.mongodb.net/tinderDB?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Here we go!!!!"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening the ${port}`));
