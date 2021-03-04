const fs = require("fs");
const request = require("request");
const axios = require("axios");
const resizeImages = require("./imageResizer.js");

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

axios
  .get("http://localhost:3000/imageurls")
  .then((response) => {
    for(var i = 1; i <=50; i++) {
    //  const path = `./download/businessImages/image${i}.jpg`
    const path = `app/assets/businessImages/image${i}.jpg`
      download(response.data[i-1], path, () => {

        let images = [path];
        let width = 350;
        let quality = 100
        resizeImages(images, width, undefined, quality);
        console.log('✅ Done! ' + i)
      })
    }
  })
  .catch(console.log);


