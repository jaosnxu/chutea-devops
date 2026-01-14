const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello from Express");
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
