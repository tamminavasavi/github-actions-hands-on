const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/app.txt", "Build completed successfully");

console.log("Build completed");
