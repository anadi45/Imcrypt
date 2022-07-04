const router = require("express").Router();
const {decodeImage} = require("../controllers/decodeController");
const {upload} = require("../middlewares/multer");

router.route("/").post(upload.single('image'),decodeImage);

module.exports = router;