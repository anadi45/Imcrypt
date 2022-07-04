const router = require("express").Router();
const {encodeImage} = require("../controllers/encodeController");
const {upload} = require("../middlewares/multer");

router.route("/").post(upload.single('image'),encodeImage);

module.exports = router;