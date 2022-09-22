const fs = require("fs");
const path = require("path");

const filmes = require("./filmes");

const filmesJson = JSON.stringify(filmes);

fs.writeFileSync(path.resolve("database", "filmes.json"), filmesJson);
