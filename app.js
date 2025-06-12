const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
const path = "/data/record.txt";

app.use(express.json());

// 쓰기
app.post("/", (req, res) => {
    const msg = req.body.message || "empty";
    fs.writeFileSync(path, msg, "utf8");
    res.send("Message saved.");
});

// 읽기
app.get("/", (req, res) => {
    if (fs.existsSync(path)) {
        const content = fs.readFileSync(path, "utf8");
        res.send(`Saved message: ${content}`);
    } else {
        res.send("No message found.");
    }
});

app.listen(port, () => {
    console.log(`[APP] Server running on ${port}`);
});