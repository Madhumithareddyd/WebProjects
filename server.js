const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static("."));
app.get('/', (req, res) => {
    res.sendFile('D:/DHOOMDHAAMPRJ/dhoomdhaamclient/dhoomdhaam/login/login.html');
  });

// ... your route definitions ...
app.use(express.static("./"));

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
