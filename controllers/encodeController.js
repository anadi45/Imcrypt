const {spawn} = require("child_process");
const fs = require("fs");

const encodeImage = (req,res)=>{
    try {
        let dataToSend;

        if(!req.file) {
            return res.status(400).send({
                message: "Field can't be left empty !"
            })
        }

        const path = req.file.path;
        const message = req.body.message;
        
        if(!message) {
            return res.status(400).send({
                message: "Field can't be left empty !"
            })
        }

        const python = spawn('python', ['controllers/encodeScript.py',path,message]);
        
        python.stdout.on('data', function (data) {
            dataToSend = data.toString();
        });
        python.on('close', (code) => {
            res.download(path);
            
            setTimeout(function(){
                fs.unlinkSync(path);
            }, 3000);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {encodeImage};