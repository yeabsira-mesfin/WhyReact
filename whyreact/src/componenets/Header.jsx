import React from "react";
import reactlogo from './assets/react-core-concepts.png'
const reactDescription = ["Fundemental", "Crucial", "Core"];

const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));
const description = reactDescription[getRandomInt(reactDescription.length - 1)];
const Header = () => {
  return (
    <div>
      <header>
        <img src={reactlogo
            
        } alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {`${description} React concepts you will need for almost any app you are
      going to build!`}
        </p>
      </header>
    </div>
  );
};

export default Header;
