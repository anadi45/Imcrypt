import React, {useEffect} from 'react';
import "../encode/encode.css";

const Encode = () => {

  useEffect(()=>{
    let textarea = document.querySelector(".autoResize");
    textarea.addEventListener('input', autoResize, false);
  
    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
  })

  return (
    <div className="container">
        <form method="POST" action="https://anadi45-imcrypt.herokuapp.com/api/encode" encType="multipart/form-data">
            <div className="form-group">
                <label htmlFor="inputImage">Your PNG Image</label>
                <input type="file" className="form-control" id="inputImage" name="image"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputSecret">Your Secret</label>
                <textarea className="autoResize form-control" name="message" cols="100"></textarea>
            </div>
            <button type="submit" className="btn btn-lg">Encode</button>
        </form>
    </div>
  )
}

export default Encode;