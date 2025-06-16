const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send('Hello from Github Actions + ArgoCD CI/CD! - This is Version 2');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});