const express = require("express");
const fs = require("fs");
const os = require("os");
const app = express();
const port = process.env.PORT || 3000;
const path = "/data/hostname.txt";

app.get("/", (req, res) => {
    const hostname = os.hostname();
    let content = "(no hostname file)";

    if (fs.existsSync(path)) {
        content = fs.readFileSync(path, "utf8");
    } else {
        fs.writeFileSync(path, hostname);
        content = hostname;
    }

    res.setHeader("Content-Type", "text/plain");
    res.send(`I am ${hostname}, stored ID: ${content}\n`);
});

app.listen(port, () => {
    console.log(`[APP] running on port ${port}`);
});