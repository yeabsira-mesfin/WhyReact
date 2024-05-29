import React from 'react'

const reactDescription = ['Fundemental', 'Crucial', 'Core'];

const getRandomInt = (max) => Math.floor(Math.random() * (max+1));

const Header = () => {
  return (
    <div><header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {`${reactDescription[getRandomInt(reactDescription.length - 1)]} React concepts you will need for almost any app you are
      going to build!`} 
    </p>
  </header></div>
  )
}

export default Header