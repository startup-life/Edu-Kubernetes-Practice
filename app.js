const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let healthy = false;

setTimeout(() => {
    healthy = true;
    console.log("[APP] Became healthy after 10s");
}, 10000);

app.get("/health", (req, res) => {
    if (healthy) {
        console.log("[/health] 200 OK");
        res.send("OK");
    } else {
        console.log("[/health] 500 Not Ready");
        res.status(500).send("Not Ready");
    }
});

app.listen(port, () => {
    console.log(`[APP] Express server running on port ${port}`);
});
