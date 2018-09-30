const express = require("express");
const path = require("path");
const reload = require("reload");
const app = express();
reload(app);

const project = process.argv[2];

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));
app.use("/js", express.static(`sketches/${project}`));
app.use(express.static(__dirname));
app.listen(3000, () => console.log(`Example app listening on port 3000`));
