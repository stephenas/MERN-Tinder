import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import axios from 'axios';

function TinderCards() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://steve-tinder-card-backend.herokuapp.com/tinder/cards/", {}).then(res => {
      setPeople(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);
  console.log('People - ', people);


  const swiped = (dirction, nameToDelete) => {
    console.log("removing: ", nameToDelete);
  }

  const outOfFrame = (name) => {
    console.log(name, " left the screen");
  }


  return (
    <div className='tinderCards'>
      <div className="cardContainer">
        {people.map((person) => (
        <TinderCard 
          className='swipe'
          key={person.name}
          preventSwipe={['up', 'down']}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div style={{ backgroundImage: "url(" + person.imgUrl + ")"}} className="card">
            <h3>{person.name}</h3>

          </div>

        </TinderCard>
      ))}
      </div>
      
    </div>
  )
}

export default TinderCards
