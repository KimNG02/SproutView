import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";
import Alphabet from "./Alphabet";
import cactusImage from "./Cactus 209133001.png";
import jalapenoImage from "./Jalapeno Chili 3 Stk.png";
import strawberryImage from "./Strawberry transparent.png";


const App = ({ onConfirmPlanting, onPlantChange, selectedPlant, showAboutUs }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [typeEffect] = useTypewriter({
    words: ["Sprout View", "Your plantation guide", "Sprout View", "Your plantation adventure"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  
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
      <header className="logo">Sprout View 🪴</header>
      <main>
      <section class="intro-section">
        <h2>
          Welcome to 
          <span> {typeEffect}</span>
          <Cursor/>
        </h2>
          <p>Explore and select plants by clicking on letters or images below.</p>
      </section>
      <section class="image-section">
          <img src="https://media.istockphoto.com/id/1459952195/sv/foto/beautiful-spring-garden-with-flowers-and-lawn-grass-3d-illustration.jpg?s=612x612&w=0&k=20&c=jcWhULX1E3E0IAOriKKAbZkDNpJmaLmd-xem9rGA10w=" 
          alt="Garden Image" class="garden-image"/>
      </section>
      <section class="cta-section">
        <button class="explore-button" onClick={showAboutUs}>About Us</button>
      </section>


        <div>
          <h1>Select a Letter</h1>
          <Alphabet onLetterClick={handleLetterClick} />
          <div>
            <div>
              {Array.from({ length: 26 }, (_, i) => (
                <div key={i} id={String.fromCharCode(65 + i)} className="letter-section">
                  {String.fromCharCode(65 + i)}
                  {String.fromCharCode(65 + i) === "C" && <img className="plantImage" src={cactusImage} alt="Cactus" onClick={() => handleImageClick("Cactus")} />}
                  {String.fromCharCode(65 + i) === "J" && <img className="plantImage" src={jalapenoImage} alt="Jalapeno" onClick={() => handleImageClick("Jalapeno")} />}
                  {String.fromCharCode(65 + i) === "S" && <img className="plantImage" src={strawberryImage} alt="Strawberry" onClick={() => handleImageClick("Strawberry")} />}
                </div>
              ))}
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Are you sure you want to plant a {selectedPlant}?</h2>
              <button onClick={handleConfirmPlantingClick}>Yes</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
