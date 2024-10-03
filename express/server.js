import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { carsData } from './data/cars.js';



const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


app.get("/web", (req,res) => {
    res.sendFile(path.join(__dirname, '/public', 'attractions.html'));
})

app.get("/",(req,resp) => {
    console.log(carsData)
})



app.listen(PORT, () => {
    console.log(carsData)
    console.log(`Server is running on http://localhost:${PORT}`);
});