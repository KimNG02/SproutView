import React, { useState, useEffect, useRef, createElement } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter-remake2";
import "./styles/App.css";
import Alphabet from "./Alphabet";
import frontpageImage from "./images/fornt.png";
import icon from "./images/icon.png";
import apiServiceHandler from "./apiServiceHandler";
import Image from "./Image";

const App = ({
  onConfirmPlanting,
  onPlantChange,
  selectedPlant,
  showAboutUs,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [plantString, setPlantString] = useState(null);
  const plantSelectRef = useRef(null);
  const [plants, setPlants] = useState(null);
  const [images, setImages] = useState(null);

  const [text] = useTypewriter({
    words: ["Sprout View", "Your planting adventure"],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1500,
    delayTime: 2000,
  });


  useEffect(() => {
    const handleOnFetch = (response) => {
      setPlantString(response.data);
    };
    const fetchPlants = async () => {
      try {
        console.log("Trying to fetch plants");
        const response = await apiServiceHandler.getPlants();
        handleOnFetch(response);
      } catch (error) {
        console.error("Error fetching plant list:", error);
      }
    };
    plantString ? stuff() : fetchPlants();
  }, [plantString]);

  const doNothing = () => {console.log("Baby shark do do do do do...");};
  const stuff = () => {
    plants ? doNothing() : parse();
  };
  const parse = () => {
    var plantNames = plantString.split("]")[0];
    var plantImages = plantString.split("]")[1];

    plantImages = plantImages.split("[")[1];
    plantImages = plantImages.replaceAll('"', '');
    console.log(plantImages);
    plantImages = plantImages.split(",");
    setImages(plantImages);

    plantNames = plantNames.substring(6,plantNames.length - 1);
    plantNames = plantNames.replaceAll('"', '');
    console.log(plantNames);
    plantNames = plantNames.split(",");
    setPlants(plantNames);
  };

  const scrollToPlantSelection = () => {
    plantSelectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageClick = (plantType) => {
    setModalOpen(true);
    onPlantChange(plantType);
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
    letter = String.fromCharCode(letter.charCodeAt(0)+32);
      setSelectedLetter(letter);
    scrollToLetter(letter);
  };

  const scrollToLetter = (letter) => {
    const letterElement = document.getElementById(letter);
    if (letterElement) {
      letterElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div>
      {plantString ? (
        <main id="app-main">
          {/* {handleOnFetch} */}
        <section class="image-section">
          <img
            src={frontpageImage}
            alt="Windowsill with plants"
            class="frontimage"
          />
          <div className="image-text">
            <section class="intro-section">
              <h2>
                Welcome to
                <br></br>
                <span>
                  {text}
                  <Cursor />
                </span>
              </h2>
              <p>
                Explore and select indoor plants by clicking on letters or
                images below.
              </p>
            </section>
          </div>
          <div>
            <a className="animated-button1" onClick={scrollToPlantSelection}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Start Planting!
            </a>
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
                <div
                  key={i}
                  id={String.fromCharCode(97 + i)}
                  className="letter-section"
                >
                 <div className="plant-info">
                  <span className="alphabet-letter">{String.fromCharCode(65 + i)}</span> {/* Display the alphabet letter */}
                  <div className="plants"> 
                    {plants && plants
                      .filter(plant => plant.toLowerCase().charCodeAt(0) === (97 + i))
                      .sort()
                      .map((plant, index) => (
                        <div className="plant" key={index}>
                      <Image imageSource={images[plants.indexOf(plant)]} plant={plant} index={index} filter={97+i} click={handleImageClick} /> {plant[0].toUpperCase() + plant.substring(1, plant.length)} <div/>

                    </div>
                    ))}
                  </div>
                </div>
                </div>
              ))}
            </div>
            <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button>
          </div>
        </section>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Are you sure you want to plant a {selectedPlant}?</h2>
              <a href="#options">
                <button>Yes</button>
              </a>
            </div>
          </div>
        )}
      </main>
      ) : (
        <div className="loading-screen">
          <img
            className="loading-screen"
            src="https://i.imgur.com/IFpG99y.gif"
          />
        </div>
      )}
    </div>
  );
};

export default App;
