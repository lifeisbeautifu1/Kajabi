import Anthony from '../images/slider_4.png';
import Nicole from '../images/slider_1.png';
import Ellen from '../images/slider_2.png';
import Natalie from '../images/slider_3.png';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: Nicole,
    name: 'Nicole Begley',
    text: 'When I launched, I welcomed 50 new students, helped them get awesom results, and earned $25,000. I was over the moon.',
    company: 'Hair of the Dog',
  },
  {
    image: Anthony,
    name: 'Anthony Trucks',
    text: "The stat I'm most proud of in my business? 7 — the number of years I've been supporting my family as a coach.",
    company: 'Personal Development Coach',
  },
  {
    image: Ellen,
    name: 'Ellen Yin',
    text: "My 'aha' moment was realizing I could monetize existing skills and knowledge and turn them into a service that I could sell.",
    company: 'Cubicle to CEO',
  },
  {
    image: Natalie,
    name: 'Natalie and Danielle',
    text: '...Kajabi makes the process of setting up our own courses so seamless, so we can spend more time creating...',
    company: 'BossBabe.com',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleIncrement = () => {
    if (currentIndex + 1 >= slides.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex + 1 >= slides.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="overflow-hidden mb-20 relative h-[550px] lg:h-[300px] mt-8">
      {slides.map((slide, index) => {
        let position = 'nextSlide';
        if (index === currentIndex) {
          position = 'active';
        }
        if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === slides.length - 1)
        ) {
          position = 'prevSlide';
        }
        return (
          <div
            key={index}
            className={`slide absolute z-10 ${position} flex flex-col lg:flex-row gap-12 items-start border-l border-l-black py-6 px-14`}
          >
            <img src={slide.image} className="w-[250px]" alt="Anthony" />
            <div>
              <p className="font-semibold text-xl w-[60%] text-black mb-4">
                {slide.text}
              </p>
              <h1 className="text-4xl mb-1 text-blue-500 font-semibold">
                {slide.name}
              </h1>
              <p className="text-sm">{slide.company}</p>
            </div>
          </div>
        );
      })}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[11] right-0 top-[50%] h-6 w-6 text-gray-400 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        onClick={handleIncrement}
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default Slider;
