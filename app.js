const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    try {
        const content = fs.readFileSync("/config/message.txt", "utf8");
        res.send(`File message: ${content}`);
    } catch (e) {
        res.send("No config file found.");
    }
});

app.listen(port, () => {
    console.log(`[APP] Running on port ${port}`);
});