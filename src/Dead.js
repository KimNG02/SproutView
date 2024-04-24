import React, {useRef, useState} from 'react';
import './styles/Dead.css';

function Dead({timelineData}) {
    const suggestionsRef = useRef(null);
    const [value, setValue] = useState(1);

    const scrollToSuggestions = () => {
        suggestionsRef.current.scrollIntoView({ behavior: 'smooth' });
      };

    const handleChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    const incrementValue = () => {
        setValue((prevValue) => Math.min(prevValue + 1, 4));
    };

    const decrementValue = () => {
        setValue((prevValue) => Math.max(prevValue - 1, 1));
    };

  return (
    <div className="dead-container">
      <section className="timeline-section" id="dead-timeline">
        <h1>Oh no!!!</h1>
        <h4>Your Cactus plant will not be able to grow in your current environment</h4>
        <div className="dead-circle-container">
            <button className="arrow left-arrow" onClick={decrementValue}>&lt;</button>
            <img src="https://s3-alpha-sig.figma.com/img/725c/eae0/a9485ca9a603c7925337e0fbf6ffe17a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E14IOcqfMbbS7a1XpjvmYts~QrlKeiFiN-NmBXvVVK72MZkNIvg84mgrHHF5Ds6EzORW6f4eB6LE3I78GzTc-KY5IVtlpbpHrLxsGtjpG-dHF5YSR-KBBH-Qy-LU-lmy~CKLBHM7ISWtt0v8HOpg208k6NkvElFArIcJT~912NriBP75niq-BxHU3yaXhuITnGc21CDIbjU5bIAJ9sRCrz4WEWBjQzmi~F3kl2MIgqTQ5g0hKF3uBgieCl7qmlVU0Yk6EkfSFtskOtQm8QmCZhzpORY26NMmQqnxXg9kJdnp8OGojkvajXLhgKTj97fOPJFQ6j~wfkQyXidfbM3R4g__" alt="Your Image" />
            <button className="arrow right-arrow" onClick={incrementValue}>&gt;</button>
        </div>
        <div className="slider-container">
        <input 
        type="range" 
        min="1" 
        max="4" 
        value={value} 
        className="slider" 
        onChange={handleChange} 
        />
      <div className="labels">
        <span className={value === 1 ? 'active' : ''}>Sprout</span>
        <span className={value === 2 ? 'active' : ''}>Vegetative</span>
        <span className={value === 3 ? 'active' : ''}>Flowering</span>
        <span className={value === 4 ? 'active' : ''}>Mature/Ripe</span>
      </div>
    </div>
        
        <h2 onClick={scrollToSuggestions}>HELP!</h2>
      </section>
      <section ref={suggestionsRef} className="timeline-section" id="growth-suggestions">
        <h1>Growth Suggestions</h1>
        <div className="white-rectangle"></div>
      </section>
    </div>
  );
}

export default Dead;
