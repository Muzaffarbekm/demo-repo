import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { cats } from './data/cats.js'
// todo: import cats data
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// todo: invoke the static middle ware
app.use(express.static(path.join(__dirname, 'public')));

// todo: set up view engine for ejs template
app.set("view engine", "ejs");
app.set("views", "views_dir");


// todo: fill in any paths
app.get("/jiji-profile", (req, resp) => {
    resp.sendFile(path.join(__dirname, ("public", "jiji.html")));
})

app.get("/lion-profile", (req,resp) => {
    resp.sendFile(path.join(__dirname, "public", "lion.html"));
})

app.get("/cats", (req,resp) => {
    let data = {"cats": cats}
    resp.render("cats_list", data);
})




// todo: fill in any views
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});