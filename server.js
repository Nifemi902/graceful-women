const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const DEVOS_FILE = './devotionals.json';

app.post('/add-devotional', (req, res) => {
  const newDevo = req.body;
  const devos = JSON.parse(fs.readFileSync(DEVOS_FILE));
  devos.push(newDevo);
  fs.writeFileSync(DEVOS_FILE, JSON.stringify(devos, null, 2));
  res.send('Devotional added successfully.');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
