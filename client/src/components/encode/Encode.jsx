import React, {useState,useEffect} from 'react';
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

  const encodeImage = async() => {
    const image = document.querySelector('input[type="file"]');
    const message = document.querySelector("#secret");
    const fd = new FormData();
  
    fd.append('image', image.files[0]);
    fd.append('message',message.innerHTML);
  
    const encode = await fetch("https://anadi45-imcrypt.herokuapp.com/api/encode", {
      method: "POST",
      body: fd
    })
  
    const action = await encode.json();
    setResult(action.message);
  
    let modal = document.querySelector(".modal");
    modal.style.display="block";
  }

  return (
    <div className="container">
        
        <div className="form-group">
            <label htmlFor="inputImage">Your PNG Image</label>
            <input type="file" className="form-control" id="inputImage" name="image"/>
        </div>
        <div className="form-group">
            <label htmlFor="inputSecret">Your Secret</label>
            <textarea className="autoResize form-control" name="message" cols="100" id="secret"></textarea>
        </div>
        <button type="submit" className="btn btn-lg" onClick={encodeImage}>Encode</button>
        
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