import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import itemsRoutes from "./routes/items.js";
import listRoutes from "./routes/shoppingList.js";
import listItemsRoutes from "./routes/listItems.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use("/items", itemsRoutes);
app.use("/lists", listRoutes);
app.use("/listItems", listItemsRoutes);

const CONNECTION_URL =
  "mongodb://user1:RbUFu6VgUh6Y271f@codecamp-mongo-course-shard-00-00.spl74.mongodb.net:27017,codecamp-mongo-course-shard-00-01.spl74.mongodb.net:27017,codecamp-mongo-course-shard-00-02.spl74.mongodb.net:27017/shoppingify-devChallenges?ssl=true&replicaSet=atlas-480jj6-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running at PORT ${PORT}`))
  )
  .catch((err) => console.log(`${err} server did not connect`));
