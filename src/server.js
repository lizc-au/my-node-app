require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => res.send("Hello Express!"));
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.post("/api/echo", (req, res) => res.json({ youSent: req.body }));
app.get("/api/pause", (req, res) => {
  debugger;
  res.json({ paused: true });
});
app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT),
);
