const {spawn} = require("child_process");
const fs = require("fs");

const decodeImage = (req,res)=> {
    try {
        let dataToSend;

        if(!req.file) {
            return res.status(400).json({
                "message": "ERROR: Image Field can't be left empty !"
            })
        }
        
        const path = req.file.path;
        
        const python = spawn('python', ['controllers/decodeScript.py',path]);
        
        python.stdout.on('data', function (data) {
            dataToSend = data.toString();
        });
        python.on('close', (code) => {
            res.json({"message":dataToSend});
            fs.unlinkSync(path);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {decodeImage};