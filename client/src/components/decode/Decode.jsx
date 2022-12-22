import React, {useState,useEffect} from 'react';
import "../decode/decode.css";

const Decode = () => {
  const [result,setResult] = useState("");
  const [decode,setDecode] = useState("Decode");
	
  useEffect(()=>{
	
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

  const decodeImage = async ()=> {
	setDecode("Decoding...");
	const image = document.querySelector('input[type="file"]');
	const fd = new FormData();

	const filename = image.files[0].type;
    const ext = filename.split("/");
    
    if(ext[ext.length - 1] !== 'png') {
      let modal = document.querySelector(".modal");
      setResult("ERROR: Only PNG Image is accepted !");
      modal.style.display="block";
	  setDecode("Decode");
      return;
    }

	fd.append('image', image.files[0]);

	const decode = await fetch("https://ranjeetbaraik-imcrypt.onrender.com/api/decode", {
		method: "POST",
		body: fd
	})

	const secret = await decode.json();
	setResult(secret.message);

	let modal = document.querySelector(".modal");
	modal.style.display="block";
	setDecode("Decode");
  }

  return (
    <div className="container">
		
            <div className="form-group">
                <label htmlFor="inputImage">Your PNG Image</label>
                <input type="file" className="form-control" id="inputImage" name="image"/>
            </div>
            <button type="submit" className="btn btn-lg" onClick={decodeImage} >{decode}</button>

		<div id="myModal" className="modal">
			<div className="modal-content">
				<span className="close">&times;</span>
				<p>{result}</p>
			</div>
		</div>

    </div>
  )
}

export default Decode;