import express from "express";
import helmet from "helmet";
import "dotenv/config";
import routes from "./src/routes/apiRoute";

const PORT = process.env.PORT;

const APP = express();

APP.use(helmet());
APP.use(express.json());
APP.use("/api", routes);

APP.get("/", (req, res) => {
  res.send("Hello World");
});

APP.listen(PORT, () => {
  console.log(`Server Running And Listening ${PORT}`);
});
