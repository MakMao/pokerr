import React, {useState, useEffect, useTransition} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import testimg from '../images/testimg.png'
import testimg2 from '../images/testimg2.png'
import Test from './Test';
import { allData } from '../../data';


const HuPostFlop = () => {

  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');
    const [transcriptArray, setTranscriptArray] = useState([]);

  const [selectedFlop, setSelectedFlop] = useState('');
  const [check, setCheck] = useState(false)
  const [oop, setOop] = useState(true)

  const searchData = allData.find(item => item.id === transcriptArray);
  console.log(searchData);


  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const newRecognition = new window.webkitSpeechRecognition();
      setupRecognition(newRecognition);
    } else if ('SpeechRecognition' in window) {
      const newRecognition = new window.SpeechRecognition();
      setupRecognition(newRecognition);
    } else {
      console.log('Speech recognition not available');
    }
  }, []);



  const setupRecognition = (newRecognition) => {
    newRecognition.continuous = true;
    newRecognition.interimResults = true;
    newRecognition.lang = 'nl-NL'; 

    newRecognition.onstart = () => {
      setListening(true);
      console.log('Speech recognition started');
    };


newRecognition.onresult = (event) => {
  const transcript = event.results[event.results.length - 1][0].transcript.trim();

  setTranscriptArray(transcript.toLowerCase().replace(/\s/g, ''));

  if (transcript.length >= 3) {
    setSelectedFlop(transcript);
  }
};

newRecognition.onend = () => {
  setListening(false);
  console.log('Speech recognition stopped');
};

setRecognition(newRecognition);

  };

  const handleStart = () => {
    if (recognition) {
      recognition.start();
    }
  };

  // console.log(transcriptArray);

  const handleStop = () => {
    if (recognition) {
      recognition.stop();
    }
  };

    const handleRadioChange = (event) => {
    setSelectedFlop(event.target.value);
  };

    useEffect(() => {
    if(transcriptArray.length > 1){
      recognition.stop();
    }
  }, [transcriptArray])
  return (
    <Wrapper>
    <div className="container">
      <h2>Hu 100 Limp Check</h2>
        <div className="record-btn-container">
          <button className="record-btn" onClick={handleStart} disabled={listening}>
                Start Recording
              </button>
              <button className="record-btn" onClick={handleStop} disabled={!listening}>
                Stop Recording
              </button>
        </div>
              <div>
            <p>Transcript: {transcriptArray}</p>
          </div>
          {oop ? (
          <div className="oop">
            {allData.filter(item => item.id == transcriptArray).map((filteredItem, i) => {
              const {board, imgoop, betoop, imgip, betip} = filteredItem
              console.log(betoop);
              return (
            <div key={i}>
             <div className="board">
            <h3>Board {board}</h3>
            <button onClick={() => setOop(false)}>Switch to IP</button>
            </div>
            <div className="options">
              {Object.keys(betoop).map((key) => (
                <div className="option" key={key}>
                  {key}
                </div>
              ))}
            </div>
            <div className="options">
              {Object.keys(betoop).map((key) => (
                <div className="option" key={key}>
                  {betoop[key]}
                </div>
              ))}
            </div>
              <img className="test-img" src={imgoop} alt="" />
            </div>
              )
            })}
          </div>
          ) :
          <div className="oop">
            {allData.filter(item => item.id == transcriptArray).map((filteredItem, i) => {
              const {board, imgoop, betoop, imgip, betip} = filteredItem
              console.log(betoop);
              return (
            <div key={i}>
             <div className="board">
            <h3>Board {board}</h3>
            <button onClick={() => setOop(true)}>Switch to IP</button>
            </div>
            <div className="options">
              {Object.keys(betip).map((key) => (
                <div className="option" key={key}>
                  {key}
                </div>
              ))}
            </div>
            <div className="options">
              {Object.keys(betip).map((key) => (
                <div className="option" key={key}>
                  {betip[key]}
                </div>
              ))}
            </div>
              <img className="test-img" src={imgip} alt="" />
            </div>
              )
            })}
          </div>
          }
    </div>
    </Wrapper>

    
  )
}

const Wrapper = styled.div`

.container {
  border: 2px solid red;
  height: 100vh;
  display: flex;
  flex-direction:column; 
  align-items: center;
}

.record-btn-container {
  display: flex;
  margin: 1em 0;
}

.record-btn {
  margin: 0 0.5em;
  padding: 0.3em 0.5em;
  cursor: pointer;
}

.options {
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  width: 400px;
}

.option {
  padding: 0 1em;
}

.test-img {
  padding-top: 1em;
  width: 400px;
  height: 400px;
}

.board {
  display: flex;
  justify-content: space-between;
  width: 400px;
}
`

export default HuPostFlop
