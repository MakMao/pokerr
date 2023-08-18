import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import hu100 from '../images/HU100.png';
import first from '../images/4m6m100a1stin.png'
import multi_1 from '../images/iso4m100ubestand1.png'
import multi_2 from '../images/Iso4m100ubestand2print.png'
import { Link } from 'react-router-dom';


const U100 = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleRadioChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const getImageSrc = () => {
    switch (selectedImage) {
      case 'first':
        return first;
      case 'multi_1':
        return multi_1;
      case 'multi_2':
        return multi_2;
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
                value="first"
                className="radio-btn"
                checked={selectedImage === 'first'}
                onChange={handleRadioChange}
              />
              First
            </label>
            <label>
              <input
                type="radio"
                value="multi_1"
                className="radio-btn"
                checked={selectedImage === 'multi_1'}
                onChange={handleRadioChange}
              />
              Multi_1
            </label>
            <label>
              <input
                type="radio"
                className="radio-btn"
                value="multi_2"
                checked={selectedImage === 'multi_2'}
                onChange={handleRadioChange}
              />
              Multi_2
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

export default U100;
