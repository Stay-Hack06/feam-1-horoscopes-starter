import aquariusImg from "./assets/aquarius.png";
import ariesImg from "./assets/aries.png";
import cancerImg from "./assets/cancer.png";
import capricornImg from "./assets/capricorn.png";
import geminiImg from "./assets/gemini.png";
import leoImg from "./assets/leo.png";
import libraImg from "./assets/libra.png";
import piscesImg from "./assets/pisces.png";
import sagittariusImg from "./assets/sagittarius.png";
import scorpioImg from "./assets/scorpio.png";
import taurusImg from "./assets/taurus.png";
import virgoImg from "./assets/virgo.png";

const horoscopeData = {
  horoscopes: {
    astroSigns: [
      {
        signName: "Aries",
        startDate: "March 21",
        endDate: "April 19",
        dailyHoroscope:
          "Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
        luckyNumbers: [3, 17, 21],
        traits: "Fiery, passionate, determined, courageous",
        key: 0,
        img: ariesImg,
      },
      {
        signName: "Taurus",
        startDate: "April 20",
        endDate: "May 20",
        dailyHoroscope:
          "Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
        luckyNumbers: [5, 14, 29],
        traits: "Kind, generous, loyal, patient",
        key: 1,
        img: taurusImg,
      },
      {
        signName: "Gemini",
        startDate: "May 21",
        endDate: "June 20",
        dailyHoroscope:
          "Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
        luckyNumbers: [2, 16, 23],
        traits: "Independent, curious, charming, gentle",
        key: 2,
        img: geminiImg,
      },
      {
        signName: "Cancer",
        startDate: "June 21",
        endDate: "July 22",
        dailyHoroscope:
          "Embrace your creative side. Today is a perfect day for starting a new artistic project.",
        luckyNumbers: [7, 19, 25],
        traits: "Compassionate, sentimental, protective, emotional",
        key: 3,
        img: cancerImg,
      },
      {
        signName: "Leo",
        startDate: "July 23",
        endDate: "August 22",
        dailyHoroscope:
          "Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
        luckyNumbers: [1, 8, 22],
        traits: "Charismatic, dramatic, confident, fun",
        key: 4,
        img: leoImg,
      },
      {
        signName: "Virgo",
        startDate: "August 23",
        endDate: "September 22",
        dailyHoroscope:
          "Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
        luckyNumbers: [4, 11, 26],
        traits: "Humble, practical, organised, patient",
        key: 5,
        img: virgoImg,
      },
      {
        signName: "Libra",
        startDate: "September 23",
        endDate: "October 22",
        dailyHoroscope:
          "Seek balance in your life. Take time for yourself and focus on your personal well-being.",
        luckyNumbers: [6, 15, 24],
        traits: "Romantic, artistic, friendly, persuasive",
        key: 6,
        img: libraImg,
      },
      {
        signName: "Scorpio",
        startDate: "October 23",
        endDate: "November 21",
        dailyHoroscope:
          "A mystery may unfold today. Trust your intuition and follow where it leads.",
        luckyNumbers: [9, 18, 27],
        traits: "Mysterious, powerful, brave, resourceful",
        key: 7,
        img: scorpioImg,
      },
      {
        signName: "Sagittarius",
        startDate: "November 22",
        endDate: "December 21",
        dailyHoroscope:
          "Adventure calls to you. Embrace new experiences and open yourself to learning.",
        luckyNumbers: [3, 12, 21],
        traits: "Philosophical, optimistic, adventurous, free-spirited",
        key: 8,
        img: sagittariusImg,
      },
      {
        signName: "Capricorn",
        startDate: "December 22",
        endDate: "January 19",
        dateRange: "December 22 - January 19",
        dailyHoroscope:
          "Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
        luckyNumbers: [8, 16, 23],
        traits: "Traditional, disciplined, ambitious, independent",
        key: 9,
        img: capricornImg,
      },
      {
        signName: "Aquarius",
        startDate: "January 20",
        endDate: "February 18",
        dailyHoroscope:
          "Innovation is your theme today. Think outside the box and explore new ideas.",
        luckyNumbers: [5, 13, 20],
        traits: "Humanitarian, eccentric, individualistic, cool",
        key: 10,
        img: aquariusImg,
      },
      {
        signName: "Pisces",
        startDate: "February 19",
        endDate: "March 20",
        dailyHoroscope:
          "Your empathy will be a blessing to someone in need. Listen and offer your support.",
        luckyNumbers: [2, 10, 22],
        traits: "Creative, easy-going, faithful, sensitive",
        key: 11,
        img: piscesImg,
      },
    ],
  },
};

export default horoscopeData;
