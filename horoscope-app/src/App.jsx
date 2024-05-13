import React from 'react';
import {useState} from 'react';
import horoscopeData from "./data.js";
import './App.css'

function App() {
  const currentDate = new Date();
  const signsData = horoscopeData.horoscopes.astroSigns;
const [selectedSign, setSelectedSign] = useState(null);

  const formatDate = date => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString("en-US", options);
  };

  const findSign = (date) => {
    const zodiacSign = signsData.find((sign) => {
      const startDate = new Date(sign.startDate + " " + currentDate.getFullYear());
      const endDate = new Date(sign.endDate + " " + currentDate.getFullYear());
      console.log(sign.signName, startDate, endDate);
      return date >= startDate && date <= endDate;
    });
    console.log(zodiacSign);
    return zodiacSign;
  };

  const currentSign = findSign(currentDate);

  const nextSignStartDate = new Date(currentSign.endDate + " " + currentDate.getFullYear());
  nextSignStartDate.setDate(nextSignStartDate.getDate() + 1);
  console.log(nextSignStartDate);

  const nextSign = findSign(nextSignStartDate);



  return (
    <>
      <h1>HOROSCOPES</h1>
      <section className='about-today'>
        <h2>About Today</h2>
        <p>Today is {formatDate(currentDate)}</p>
        <p>It's {currentSign.signName} Season!</p>
        <p>The next season approaching is {nextSign.signName} starting on {formatDate(nextSignStartDate)}</p>
      </section>
      <section className='birthday-form'>
        <h2>Find my Sign</h2>
        <p>Select your birthday to find your Zodiac sign</p>
        <button>Submit</button>
      </section>
      <section className='sign-picker'>
        {selectedSign ? ( 
        <div className='sign-info'>
          <h2 className='sign-font'>{selectedSign.signName}</h2>
          <img src={selectedSign.img} alt={`${selectedSign.signName} zodiac sign symbol`}/>
          <p>{selectedSign.startDate} - {selectedSign.endDate}</p>
          <p>Lucky number: {selectedSign.luckyNumbers.toString()}</p>
          <p>Key Traits: {selectedSign.traits}</p>
          <p>Today's Horoscope: {selectedSign.dailyHoroscope}</p>
          <button onClick={() => {setSelectedSign(null);}}>Go Back</button>
          </div>
        ) : (
          <div className='sign-buttons'>
        <h2>All Zodiac Signs!</h2>
        <p>Chose a sign to read it's daily horoscope.</p>
        <div className='buttons'>
          {signsData.map((sign) => (
            <button 
              key={sign.key} 
              className="sign-button" 
              onClick={() => setSelectedSign(sign)}>
              {sign.signName}
            </button>
          ))}
        </div>
        </div>
      )}
      </section>
    </>
  );
}

export default App;
