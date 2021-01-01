const fs = require("fs");
const files = fs.readdirSync("./app/assets/businessImages");
const ex =
  "{\n" +
  files.map(x => `"${x.split(".jpg")[0].split('image')[1]}": require("./${x}"),`).join("\n") +
  "}";
const res = "export default " + ex;
fs.writeFileSync("./app/assets/businessImages/index.js", res);