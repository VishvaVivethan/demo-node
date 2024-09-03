const express = require('express');
const app = express ();

app.use(express.json());

const PORT = process.env.PORT || 2323;

//Test Data
app.get('/api/', (req, res) => {
    res.send('Running on demo node');
  });

 app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });