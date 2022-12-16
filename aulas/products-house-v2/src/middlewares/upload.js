const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("src", "public", "images"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_produto_';
      cb(null, uniqueSuffix + file.originalname)
    }
})
  
const upload = multer({ storage: storage });

module.exports = upload;