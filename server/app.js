const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("qkqh");
});

app.get('/api/hello', (req,res) => {
    res.send("앙녕하세요.");
});