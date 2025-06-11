const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

console.log("[MAIN] Express app is starting...");
console.log("[MAIN] App is now running");

app.get("/", (req, res) => {
    res.send("Hello from lifecycle demo!");
});

setTimeout(() => {
    console.log("[MAIN] Simulating graceful shutdown in 5s...");
    process.exit(0);
}, 5000); // 자동 종료: preStop 확인을 위한 시뮬레이션

app.listen(port, () => {
    console.log(`[MAIN] App listening on port ${port}`);
});
