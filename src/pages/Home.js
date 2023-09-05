import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Home() {
  const originalText = "Hello friends. My name is ali and i am so excited to tell you a little bit about myself. I am 10 years old and I love exploring and learning new things every day. I have a fantastic family that includes my mom and dad.";

  const CombinedComponent = ({ text, isReading, transcript }) => {
    const words = text.split(' ');
    const spokenWords = transcript.split(' ');
    
    return (
      <p>
        {words.map((word, index) => {
          const isSpoken = spokenWords.includes(word);
          const isSpokenOrAfter = isSpoken || spokenWords.includes(words[index - 1]);
  
          return (
            <span
              key={index}
              style={{
                color: isSpokenOrAfter ? 'green' : isReading ? 'blue' : 'black',
              }}
            >
              {word + ' '}
            </span>
          );
        })}
      </p>
    );
  };

  const countMisreadingWords = (originalText, transcript) => {
    const originalWords = originalText.toLowerCase().split(' ');
    const userWords = transcript.toLowerCase().split(' ');
  
    let misreadingCount = -1;
  
    for (let i = 0; i < Math.min(originalWords.length, userWords.length); i++) {
      if (originalWords[i] !== userWords[i]) {
        misreadingCount++;
      }
    }
  
    return misreadingCount;
  };

    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
  
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [spokenWords, setSpokenWords] = useState(0);
    const [finalReadingSpeed, setFinalReadingSpeed] = useState(0);
  
    const numberOfMisreadingWords = countMisreadingWords(originalText, transcript);
  
    useEffect(() => {
      SpeechRecognition.stopListening(); // Stop listening when the component mounts
    }, []);
  
    useEffect(() => {
      let interval;
      if (startTime) {
        interval = setInterval(() => {
          const currentTime = Date.now();
          const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
          setElapsedTime(elapsed);
          setSpokenWords(transcript.split(' ').length);
        }, 100); // Update every 100 milliseconds
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [startTime, transcript]);
  
    const handleStart = () => {
      setStartTime(Date.now());
      SpeechRecognition.startListening();
      resetTranscript();
      setElapsedTime(0);
      setSpokenWords(0);
      setFinalReadingSpeed(0);
    };
  
    const handleStop = () => {
      SpeechRecognition.stopListening();
      setStartTime(null);
      setFinalReadingSpeed((spokenWords / (elapsedTime / 60)).toFixed(2));
    };
  
    const handleReset = () => {
      resetTranscript();
      setStartTime(null);
      setElapsedTime(0);
      setSpokenWords(0);
      setFinalReadingSpeed(0);
    };
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    // Calculate accuracy
    const originalWords = originalText.split(' ');
    const transcribedWords = transcript.split(' ');
    const totalWords = originalWords.length;
    let correctWords = 0;
  
    for (let i = 0; i < totalWords; i++) {
      if (originalWords[i] === transcribedWords[i]) {
        correctWords++;
      }
    }
  
    const accuracy = (correctWords / totalWords) * 100;

  return (
    <div>
      <h1>Home</h1>
      <div class="title">Text Area</div>

      <div class="text-area original-text">
      <CombinedComponent text={originalText} isReading={false} transcript={transcript} />
      </div>

      <div class="start">
          <button onClick={handleStart}>Start</button>
        </div>
        <div class="stop">
          <button onClick={handleStop}>Stop</button>
        </div>
        <div class="reset">
          <button onClick={handleReset}>Reset</button>
        </div>

        <div class="results">
        <div class="number-of-misreading-words">
          Number of Misreading Words: {numberOfMisreadingWords}
        </div>
        <div class="total-time-of-reading">
          Spend Time: {elapsedTime.toFixed(2)} seconds
        </div>
        <div class="Accuracy">
          Accuracy of SpeechRecognition: {accuracy.toFixed(2)}%
        </div>
        <div class="reading-speed">
          Speed of reading: {finalReadingSpeed > 0 ? `${finalReadingSpeed} WPM` : ''}
        </div>
      </div>
    </div>
  );
}

