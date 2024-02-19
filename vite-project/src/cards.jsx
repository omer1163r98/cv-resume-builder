import React, { useState, useEffect } from 'react';
import './card.css'
import Header from './header';
const Cards = ({setScore}) => {
    const [arr, setArr] = useState([32, 52, 91, 324, 74, 67, 34, 95, 14, 86, 26, 28, 11, 918, 36, 396]);
    const [clickedButtons, setClickedButtons] = useState([]);


    const randomize = () => {
      const newArr = [...arr].sort(() => Math.random() - 0.5);
      setArr(newArr);
      setClickedButtons([]);
      setScore(prev => prev +1)

    };
  
    const handleClick = (index) => {
      if (clickedButtons.includes(index)) {
        alert('You have already clicked this button!');
      } else {
        setClickedButtons([...clickedButtons, index]);
      }
    };
  return (
    <div>
      { 
        arr.map((item, index) => (
        <button onClick={() => {randomize(); handleClick(item)}} key={index}>{item}</button>
      ))}
      
    </div>
  );
};

export default Cards;
