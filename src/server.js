const express = require('express');
const cors = require('cors');
const path = require('path'); // Ajout de la bibliothèque 'path' pour manipuler les chemins de fichiers
const app = express();
const port = 3000;

app.use(cors());


// Définissez la route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});



app.get('/poweroftwo/:n', (req, res) => {
    const number = parseInt(req.params.n);
    if (isNaN(number)) {
        return res.status(400).send('Invalid number');
    }
    const result = Math.pow(2, number);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
