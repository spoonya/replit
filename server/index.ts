import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
import "./database/database";
import Routes from "./routes/routes";

const staticPath = path.join(__dirname, "../../client/build");
console.log(staticPath);
const app = express();
const routes = new Routes();

app.use(cors()); // Should be configured for production build
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.route(app);

app.use("/", express.static(staticPath));
app.use("/project", express.static(staticPath));
app.use("/project/*", express.static(staticPath));
app.use("/docs", express.static(path.join(__dirname, "docs")));

app.listen(8081);
