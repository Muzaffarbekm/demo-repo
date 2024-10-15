import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {getCats, deleteCatById, getCatById} from './data/cats.js';  // Fix imports
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// view engine for ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cats', (req, res) => {
   res.render('cats_list', { cats: getCats() });
});

app.get('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cat = getCatById(id);
    res.render('cat_detail', { 'cat': cat });
});

app.delete('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id);
    deleteCatById(id);
    res.send({ message: "Cat deleted", remainingCats: getCats() });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
