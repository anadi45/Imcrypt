const multer = require("multer");

function uniqueKey (length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random()*charactersLength));
   }
   return result;
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        let fileNameArray = (file.originalname.split('.'));
        let ext = fileNameArray[fileNameArray.length-1];
        let key = uniqueKey(8);
        cb(null, file.fieldname + key + '.' + ext);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        filesize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

module.exports = {upload};
  