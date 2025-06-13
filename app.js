const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
const path = "/data/message.txt";

app.use(express.json());

app.post("/", (req, res) => {
    const msg = req.body.message || "empty";
    fs.writeFileSync(path, msg, "utf8");
    res.send("Message saved.");
});

app.get("/", (req, res) => {
    if (fs.existsSync(path)) {
        const content = fs.readFileSync(path, "utf8");
        res.send(`Saved message: ${content}`);
    } else {
        res.send("No message found.");
    }
});

app.listen(port, () => {
    console.log(`[APP] running on port ${port}`);
});