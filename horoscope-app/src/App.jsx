import React from 'react';
import {useState, useEffect} from 'react';
import horoscopeData from "./data.js";
import './App.css'

function App() {
  const currentDate = new Date();
  const signsData = horoscopeData.horoscopes.astroSigns;
  const [selectedSign, setSelectedSign] = useState(null);
  const [formData, setFormData] = useState({ birthDate: "" });
  const [userSign, setUserSign] = useState(null);
  const [landingPageVisible, setLandingPageVisible] = useState(true);

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
      const startDate = new Date(sign.startDate + " " + date.getFullYear());
      const endDate = new Date(sign.endDate + " " + date.getFullYear());
      console.log(sign.signName, startDate, endDate);
      return date >= startDate && date <= endDate;
    });
    console.log(zodiacSign);
    return zodiacSign;
  };

  const SignInfo = ({ sign, closeSignInfo, introText }) => {
    const [horoscopeData, setHoroscopeData] = useState(null);

    useEffect(() => {
    const url = `https://horoscope19.p.rapidapi.com/get-horoscope/daily?sign=${
      sign.signName
    }&day=${"today"}`
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52e7d235c6msh1dde25f258f34f5p1ad311jsn2a86a7007ee3',
		'X-RapidAPI-Host': 'horoscope19.p.rapidapi.com'
	}
};


fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data)
    setHoroscopeData(data.data.horoscope_data);
  });
},[sign]);

    return (
  <div className='sign-info'>
    <p>{introText}</p>
  <h2 className='sign-font'>{sign.signName}</h2>
  <img src={sign.img} alt={`${sign.signName} zodiac sign symbol`} />
  <p>{sign.startDate} - {sign.endDate}</p>
  <p>Lucky number: {sign.luckyNumbers.toString()}</p>
  <p>Key Traits: {sign.traits}</p>
  <p>Today's Horoscope: { horoscopeData }</p>
  <button onClick={closeSignInfo}>Go Back</button>
</div>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  } 


  const handleSubmit = (e) => {
    e.preventDefault();
    const userBirthDate = new Date(formData.birthDate);
    const foundSign = findSign(userBirthDate);
    setUserSign(foundSign);
    setFormData({ birthDate: "" })
  };

  const currentSign = findSign(currentDate);

  const nextSignStartDate = new Date(currentSign.endDate + " " + currentDate.getFullYear());
  nextSignStartDate.setDate(nextSignStartDate.getDate() + 1);
  console.log(nextSignStartDate);

  const nextSign = findSign(nextSignStartDate);



  return (
    <>
      <h1>HOROSCOPES</h1>
      <section className='landing-page' style={{ display: landingPageVisible ? 'block' : 'none' }}>
        {landingPageVisible ? (
          <div className="landing-page">
            <h3>Welcome to Staysha's Horoscopes Page!</h3>
            <button onClick={() => setLandingPageVisible(false)}>Enter Here</button>
          </div>
        ) : (
            null
          )}
      </section>

      {landingPageVisible ? null : (
        <>
          <section className='about-today'>
            <h2>About Today</h2>
            <p>Today is {formatDate(currentDate)}</p>
            <p>It's {currentSign.signName} Season!</p>
            <p>The next season approaching is {nextSign.signName} starting on {formatDate(nextSignStartDate)}</p>
          </section>
          <section className='whats-your-sign'>
            {userSign ? (
              <SignInfo
                sign={userSign}
                closeSignInfo={() => {
                  setUserSign(null);
                }}
                introText="Your sign is..."
              />
            ) : (
                <>
                  <h2>Find Your Sign</h2>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor='birthDate'>
                      Enter your birthday to find your sign.
                    </label>
                    <input
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                    ></input>
                    <button type="submit">Submit</button>
                  </form>
                </>
              )}
          </section>
          <section className='sign-picker'>
            {selectedSign ? (
              <SignInfo
                sign={selectedSign}
                closeSignInfo={() => {
                  setSelectedSign(null);
                }}
                introText="You've selected..."
              />
            ) : (
                <div className='sign-buttons'>
                  <h2>All Zodiac Signs!</h2>
                  <p>Choose a sign to read its daily horoscope.</p>
                  <div className='buttons'>
                    {signsData.map((sign) => (
                      <button
                        key={sign.key}
                        className="sign-button"
                        onClick={() => setSelectedSign(sign)}
                      >
                        {sign.signName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
          </section>
        </>
      )}
    </>
  );
}

export default App;