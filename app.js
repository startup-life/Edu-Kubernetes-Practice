const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const siteName = process.env.SITE_NAME || "default-site";
const adminPassword = process.env.ADMIN_PASSWORD || "not-set";

app.get("/", (req, res) => {
    res.send(`Site: ${siteName}, Admin PW: ${adminPassword}`);
});

app.listen(port, () => {
    console.log(`[APP] Running on ${port}, SITE_NAME=${siteName}, ADMIN_PASSWORD=${adminPassword}`);
});