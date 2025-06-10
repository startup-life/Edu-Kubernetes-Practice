const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

let healthy = true;

// 상태 변경용 (디버그용 curl 요청)
app.get("/kill", (req, res) => {
    healthy = false;
    res.send("App marked as unhealthy");
});

app.get("/health", (req, res) => {
    if (healthy) res.status(200).send("OK");
    else res.status(500).send("NOT OK");
});

app.get("/", (req, res) => {
    res.send("Hello from liveness probe demo!");
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});