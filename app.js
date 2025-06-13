const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let load = false;

app.get("/", (req, res) => {
    res.send("Hello from HPA target\n");
});

app.get("/load", (req, res) => {
    load = true;
    res.send("CPU load started\n");
});

// 백그라운드 CPU 부하
setInterval(() => {
    if (load) {
        for (let i = 0; i < 1e8; i++) Math.sqrt(i);
    }
}, 100);

app.listen(port, () => {
    console.log(`[APP] running on port ${port}`);
});