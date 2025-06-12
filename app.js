const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || "v1";

app.get("/", (req, res) => {
    if (version === "v2") {
        res.type("text").send("Hello from v2 \n");
    } else {
        res.type("text").send("Hello from v1 \n");
    }
});

app.listen(port, () => {
    console.log(`[APP] ${version} running on port ${port}`);
});