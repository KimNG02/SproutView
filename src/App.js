import React, { useState, useEffect, useRef, createElement } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter-remake2";
import "./styles/App.css";
import Alphabet from "./Alphabet";
import frontpageImage from "./images/front.jpg";
import icon from "./images/icon.png";
import { type } from "@testing-library/user-event/dist/type";
import apiServiceHandler from "./apiServiceHandler";
import Image from "./Image";
import { renderIntoDocument } from "react-dom/test-utils";

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
  var imageMap = null;

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
        const response = await apiServiceHandler.getPlants();
        console.log(response);
        console.log(response.data);
        handleOnFetch(response);
      } catch (error) {
        console.error("Error fetching plant list:", error);
      }
    };
    plantString ? stuff() : fetchPlants();
  }, [plantString]);

  const doNothing = () => {};
  const stuff = () => {
    plants ? doNothing() : parse();
  };
  const parse = () => {
    var plantData = plantString;
    console.log("1 " + plantData)
    plantData = plantData.substring(6,plantData.length - 2);
    console.log("2 " + plantData)
    plantData = plantData.replaceAll('"', '');
    console.log("3 " + plantData)
    plantData = plantData.split(",");
    setPlants(plantData);
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
            <button className="cta-btn" onClick={scrollToPlantSelection}>
              Explore Now!
            </button>
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
                  {String.fromCharCode(65 + i)}
                  {plants ? <Image imageSources={plants} filter={97+i} click={handleImageClick} /> : <div/>}
                </div>
              ))}
            </div>
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
            src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          />
        </div>
      )}
    </div>
  );
};

export default App;
