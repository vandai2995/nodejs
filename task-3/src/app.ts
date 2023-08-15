require('dotenv').config();
import * as express from "express";
import bodyParser = require("body-parser");
import { AppDataSource } from "./data-source";
import router from "./routes";

AppDataSource.initialize().then(async () => {
    console.log("Database is connected");
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', router);
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port ", process.env.PORT || "3000");
    });

}).catch((err) => {
    console.log(err);
});




