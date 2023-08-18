import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import hu100 from '../images/HU100.png';
import hu80 from '../images/HU80.png';
import hu60 from '../images/HU60.png';
import hu40 from '../images/HU40.png'
import { Link } from 'react-router-dom';


const HuOptions = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleRadioChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const getImageSrc = () => {
    switch (selectedImage) {
      case '40':
        return hu40;
      case '60':
        return hu60;
      case '80':
        return hu80;
      case '99':
        return hu100;
      default:
        return hu100;
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>HuOptions</h2>
        </div>
        <div>
          <form>
            <label>
              <input
                type="radio"
                value="40"
                className="radio-btn"
                checked={selectedImage === '40'}
                onChange={handleRadioChange}
              />
              40
            </label>
            <label>
              <input
                type="radio"
                value="60"
                className="radio-btn"
                checked={selectedImage === '60'}
                onChange={handleRadioChange}
              />
              60
            </label>
            <label>
              <input
                type="radio"
                className="radio-btn"
                value="80"
                checked={selectedImage === '80'}
                onChange={handleRadioChange}
              />
              80
            </label>
            <label>
              <input
                type="radio"
                className="radio-btn"
                value="99"
                checked={selectedImage === '99'}
                onChange={handleRadioChange}
              />
              100
            </label>
          </form>
            <div className="img-container">
        <img src={getImageSrc()} alt="" />
        <div className="square square-one"></div>
        <div className="square square-two"></div>
        <Link to="/hu/test" className="square square-three">
        </Link>
        <div className="square square-four"></div>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
h2 {
  color: #601202;
  padding: 0.5em 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


 .hu-container {
   display: flex;
   flex-direction: column;
 }

.img-container {
  position: relative;
  display: inline-block;
}

.square {
  position: absolute;
  left: 0;
  top: 0; 
  width: 50%;
  height: 50%;
}

.radio-btn{
  padding: 1em;
}

.square-two {
  left: 50% ; 
}
.square-three {
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(55%);
  overflow: hidden;
}

.square-one:hover,
 .square-two:hover,
 .square-three:hover,
 .square-four:hover{
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible !important;
  transform: translateY(0);
}



.square-four {
  top: 50%;
  left: 50%; 
}




`;

export default HuOptions;
