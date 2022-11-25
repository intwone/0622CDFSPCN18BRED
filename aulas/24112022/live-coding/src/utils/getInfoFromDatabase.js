const fs = require("fs");
const path = require("path");

const getInfoModel = (filename) => {
  const filePath = path.join(__dirname, "..", "models", `${filename}.json`);
  const readFromFile = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(readFromFile);
};

module.exports = getInfoModel;
