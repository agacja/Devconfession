const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();

app.use(express.static('conf')); // Serve static files from 'conf' directory
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/confess', (req, res) => {
    const sinIndex = parseInt(req.body.sin, 10);
    const sinsArray = [0, 0, 0, 0, 0, 0, 0];

    if (sinIndex >= 0 && sinIndex < sinsArray.length) {
        sinsArray[sinIndex] = 1;
    } else {
        return res.status(400).send('Invalid sin index');
    }

    const tomlContent = `sins = [${sinsArray.join(", ")}]`;
    fs.writeFile('prover.toml', tomlContent, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Error writing to file');
        }

        exec('nargo execute && nargo prove && nargo verify', (error, stdout, stderr) => {
            if (error) {
                console.error(`Execution error: ${error}`);
                return res.status(500).send(`Execution error: ${error}`);
            }
            const result = parseResult(stdout);
            res.json({ result });
        });
    });
});

function parseResult(output) {
    const match = output.match(/\d+ holy mary/);
    return match ? match[0] : "Error parsing output";
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
