const {spawn} = require("child_process");
const fs = require("fs")

const decodeImage = (req,res)=> {
    try {
        let dataToSend;
        const path = req.file.path;
        
        const python = spawn('python', ['controllers/decodeScript.py',path]);
        
        python.stdout.on('data', function (data) {
            dataToSend = data.toString();
        });
        python.on('close', (code) => {
            res.send(dataToSend)   
            fs.unlinkSync(path);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {decodeImage};