import express from 'express';
import { createCat, updateCat, deleteCat, getCats, getCat } from './data/cats.js';

const router = express.Router();

// GET all cats
router.get('/cats', (req, res) => {
    try {
        const cats = getCats();
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json({ "message": `${error}` });
    }
});

// GET a specific cat by ID
router.get('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const cat = getCat(id);
        if (cat) {
            res.status(200).json(cat);
        } else {
            res.status(404).json({ "message": "Cat not found" });
        }
    } catch (error) {
        res.status(500).json({ "message": `${error}` });
    }
});

// POST a new cat
router.post('/cats', (req, res) => {
    try {
        const catData = req.body; // Ensure req.body has the expected data
        const newCat = createCat(catData);
        res.status(201).json(newCat); // Return the entire new cat object
    } catch (error) {
        res.status(500).json({ "message": `${error}` });
    }
});

// PATCH (update) a specific cat by ID
router.patch('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const updatedCat = updateCat(id, req.body);
        res.status(200).json(updatedCat);
    } catch (error) {
        res.status(500).json({ "message": `${error}` });
    }
});

// DELETE a specific cat by ID
router.delete('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const cat = deleteCat(id);
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json({ "message": `${error}` });
    }
});

export default router;
