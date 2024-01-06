const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
app.use(express.static('conf')); // Serve static files from 'conf' directory
app.use(cors());
app.use(express.json());

// Explicitly serve the index.html for the root route
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/confess', (req, res) => {
    console.log('Received data:', req.body); // Log the received data

    const sinIndex = parseInt(req.body.sin, 10);
    const sinsArray = [0, 0, 0, 0, 0, 0, 0];
    
    if (sinIndex >= 0 && sinIndex < sinsArray.length) {
        sinsArray[sinIndex] = 1;
    } else {
        return res.status(400).send('Invalid sin index');
    }

    const tomlContent = `sins = [${sinsArray.join(", ")}]`;
    console.log('Writing to prover.toml:', tomlContent); // Log before writing

    fs.writeFile('prover.toml', tomlContent, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Error writing to file');
        }

        console.log('Write to prover.toml successful'); // Log after successful write

        // Execute the Noir program
        exec('nargo execute', (error, stdout, stderr) => {
            if (error) {
                console.error(`Execution error: ${error}`);
                return res.status(500).send(`Execution error: ${error}`);
            }
            res.send(stdout);
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

