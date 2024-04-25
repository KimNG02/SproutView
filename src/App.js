import React, { useState, useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter-remake2";
import "./styles/App.css";
import Alphabet from "./Alphabet";
import cactusImage from "./images/Cactus 209133001.png";
import jalapenoImage from "./images/Jalapeno Chili 3 Stk.png";
import strawberryImage from "./images/Strawberry transparent.png";
import frontpageImage from "./images/front.jpg";
import icon from "./images/icon.png";
import { type } from "@testing-library/user-event/dist/type";



const App = ({ onConfirmPlanting, onPlantChange, selectedPlant, showAboutUs }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const plantSelectRef = useRef(null);

  const [text] = useTypewriter({
    words: ['Sprout View', 'Your planting adventure'],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 60,
    delaySpeed: 1500,
    delayTime: 2000
  })


  // useEffect(() => {
  //   const imageText = document.querySelector(".image-text");

  //   Add event listener for animation end
  //   const handleAnimationEnd = () => {
  //     text.
  //   };

  //   Attach event listener
  //   imageText.addEventListener("animationend", handleAnimationEnd);

  //   // Remove event listener on component unmount
  //   return () => {
  //     imageText.removeEventListener("animationend", handleAnimationEnd);
  //   };
  // }, []);

  
  const scrollToPlantSelection = () => {
    plantSelectRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleImageClick = (plantType) => {
    setModalOpen(true);
    onPlantChange(plantType)
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    onPlantChange(null);
  };

  const handleConfirmPlantingClick = () => {
    setModalOpen(false);
    onConfirmPlanting(); // Call the function passed from the parent component
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    scrollToLetter(letter);
  };

  const scrollToLetter = (letter) => {
    const letterElement = document.getElementById(letter);
    if (letterElement) {
      letterElement.scrollIntoView({ behavior: "smooth" });
    }
  };


    
  return (
    <div>
      <main id="app-main">
      <section class="image-section">
        <img src={frontpageImage} alt="Windowsill with plants" class="frontimage"/>
          <div className="image-text" >
            <section class="intro-section">
              <h2>
                Welcome to 
                <br></br>
                  <span>
                    {text}
                    <Cursor/>
                  </span>
              </h2>
                <p>Explore and select indoor plants by clicking on letters or images below.</p>
            </section>
          </div>
          <div>
            <button className="cta-btn" onClick={scrollToPlantSelection}>Explore Now!</button>
          </div>
      </section>
      <section className="plant-section" ref={plantSelectRef}>
          <div className="flex">
            <img className="icon" alt="icon" src={icon}></img>
            <h1 className="choice">Choose your plant</h1>
          </div>
          <Alphabet onLetterClick={handleLetterClick} />

          <div>
            <div>
              {Array.from({ length: 26 }, (_, i) => (
                <div key={i} id={String.fromCharCode(65 + i)} className="letter-section">
                  {String.fromCharCode(65 + i)}
                  {String.fromCharCode(65 + i) === "C" && <img className="plant-image" src={cactusImage} alt="Cactus" onClick={() => handleImageClick("Cactus")} />}
                  {String.fromCharCode(65 + i) === "J" && <img className="plant-image" src={jalapenoImage} alt="Jalapeno" onClick={() => handleImageClick("Jalapeno")} />}
                  {String.fromCharCode(65 + i) === "S" && <img className="plant-image" src={strawberryImage} alt="Strawberry" onClick={() => handleImageClick("Strawberry")} />}
                </div>
              ))}
            </div>
          </div>
        </section>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Are you sure you want to plant a {selectedPlant}?</h2>
              <a href="#options">
              <button >Yes</button>
              </a>
            </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default App;
