const sharp = require("sharp");

sharp("public/vercel.svg") // Path to your SVG
  .resize(32, 32)          // Favicon size
  .toFile("public/favicon.ico", (err, info) => {
    if (err) console.error(err);
    else console.log("favicon.ico created!");
  });
