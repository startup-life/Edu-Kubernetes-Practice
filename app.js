const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

setInterval(() => {
    for (let i = 0; i < 1e7; i++) Math.sqrt(i);
}, 100);

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send("Hello from VPA target\n");
});

app.listen(port, () => {
    console.log(`[APP] running on port ${port}`);
});