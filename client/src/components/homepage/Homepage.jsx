import React from 'react';
import "../homepage/homepage.css";

const Homepage = () => {
  return (
    <div className="container text-center">
        <div className="title">WELCOME</div>
        <div className="intro">Now hide all your secrets in your PNG images and be assured of your data privacy.</div>
        <div className="ques">Why Imcrypt?
			<div className="ans">Imcrypt does not store any data in the database. This ensures data privacy. No database means you hold your secrets, not any cloud database which safeguards your data from securtiy breaches.</div>
        </div>
		<div className="ques">
			How to use Imcrypt?
			<div className="ans">
				Navigate to Encode page from the navbar. Select a PNG image and type in your secret. Click on encode button to save your file.
			</div>
			<div className="ans">
				Similarly navigate to Decode page from the navbar. Choose your already encoded image and then decode to reveal the secret info.
			</div>
		</div>
    </div>
  )
}

export default Homepage;