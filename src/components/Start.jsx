import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Start = () => {
  return (
    <Wrapper>
    <div className="container">
      <div className="options-container">
        <h1>Choose one of the options below</h1>
        <div className="button-container">
          <Link to="50u" className="link-option">
            <button>50u</button>
          </Link>

          <Link to="100u" className="link-option">
            <button>100u</button>
          </Link>
          <Link to="hu" className="link-option">
            <button>Hu</button>
          </Link>
        </div>
      </div>
    </div>
    </Wrapper>

  )
}

const Wrapper = styled.div`
h1 {
  color: #601202;
}

button {
  border-radius: 5px;
  padding: 0.3em 0.7em;
  cursor: pointer;
  margin: 1em;
  background-color: #fff;
  border: 3px solid brown;
  color: brown; 
  font-weight:700;
  font-size: 1.5em;
}

button:hover{
  color: #fff;
  background-color: brown; 
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
}
.options-container {
  border: 5px solid brown;
  border-radius: 10px;
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

export default Start