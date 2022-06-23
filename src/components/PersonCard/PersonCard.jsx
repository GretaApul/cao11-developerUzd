import React from 'react';
import Footer from '../Footer/Footer';

function PersonCard() {
  return (
    <div>
      <div className="blue-container">
        <div className="person-container">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQilWHrJK9THPq281BnocVGTAMdLsefHa-zit4YUbEZnuEQ4HCmHgOyEESe4yvCYB3U9I&usqp=CAU"
            alt="img"
          />
          <h1 className="name">Alex Smith</h1>
          <p className="name-title">Web Designer</p>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
