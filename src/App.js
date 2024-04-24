import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./styles/App.css";
import Alphabet from "./Alphabet";
import cactusImage from "./images/Cactus 209133001.png";
import jalapenoImage from "./images/Jalapeno Chili 3 Stk.png";
import strawberryImage from "./images/Strawberry transparent.png";
import frontpageImage from "./images/frontpage.png";
import icon from "./images/icon.png";
import { type } from "@testing-library/user-event/dist/type";
import wait from "./wait";
import TypeWriterEffect from "react-typewriter-effect";




const App = ({ onConfirmPlanting, onPlantChange, selectedPlant, showAboutUs }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const myRef = document.querySelector('.typer')
  const typer = <TypeWriterEffect
  textStyle={{ fontFamily: 'VT323' }}
  startDelay={2}
  cursorColor="black"
  text="Sprout View"
  typeSpeed={100}
  scrollArea={myRef}
/>;
  
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
                <span id="typer">{typer}</span>
              </h2>
                <p>Explore and select plants by clicking on letters or images below.</p>
            </section>
          </div>
      </section>
      <section className="plant-section">
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
