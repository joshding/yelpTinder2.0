const fs = require("fs");
const request = require("request");
const axios = require("axios");

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

axios
  .get("http://localhost:3000/imageurls")
  .then((response) => {
    for(var i = 1; i <=50; i++) {
      const path = `./download/businessImages/image${i}.jpg`
      download(response.data[i-1], path, () => {
        console.log('✅ Done!')
      })
    }
  })
  .catch((err) => console.log(err));


