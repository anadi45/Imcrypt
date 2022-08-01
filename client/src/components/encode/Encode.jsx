import React, {useEffect,useState} from 'react';
import "../encode/encode.css";

const Encode = () => {
  const [result,setResult] = useState("");

  useEffect(()=>{
    let textarea = document.querySelector(".autoResize");
    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    let modal = document.querySelector(".modal");
    const closeModal = document.querySelectorAll(".close")[0];
    closeModal.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  })

  const encodeResponse = async () => {
    const image = document.querySelector('input[type="file"]');
    const message = document.querySelector("#message");
    
    if(image.files[0] === undefined) {
      let modal = document.querySelector(".modal");
      setResult("ERROR: Image Field can't be left empty !");
      modal.style.display="block";
      return;
    }
    
    const filename = image.files[0].type;
    const ext = filename.split("/");
    
    if(ext[ext.length - 1] !== 'png') {
      let modal = document.querySelector(".modal");
      setResult("ERROR: Only PNG Image is accepted !");
      modal.style.display="block";
      return;
    }

    if(!message.value) {
      let modal = document.querySelector(".modal");
      setResult("ERROR: Message Field can't be left empty !");
      modal.style.display="block";
      return;
    }

    let submitButton = document.querySelector("#submitButton");
    submitButton.type = "submit";

  }

  return (
    <div className="container">

        <form method="POST" action="https://anadi45-imcrypt.herokuapp.com/api/encode" encType="multipart/form-data">
            <div className="form-group">
                <label htmlFor="inputImage">Your PNG Image</label>
                <input type="file" className="form-control" id="inputImage" name="image" />
            </div>
            <div className="form-group">
                <label htmlFor="inputSecret">Your Secret</label>
                <textarea className="autoResize form-control" name="message" cols="100" id="message" ></textarea>
            </div>
            <button type="button" className="btn btn-lg" id="submitButton" onClick={encodeResponse}>Encode</button>
        </form>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>{result}</p>
          </div>
        </div>

    </div>
  )
}

export default Encode;