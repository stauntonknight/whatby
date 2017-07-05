import * as express from "express";
import { Router, Request, Response } from "express";
import * as path from "path";


// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use(express.static("views"));
app.use("/nm", express.static(path.join(__dirname, "../node_modules")));

app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req: Request, res: Response) => {
  res.render("index.html");
});


// Serve the application at the given port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
