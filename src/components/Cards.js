import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out our top specialists</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="doc1.jpg"
              path="/doctors"
              label="Dr. Michael Jordan"
              text=" Surgeon, Cardiologist"
            />
             <CardItem
              src="doc2.jpg"
              path="/doctors"
              label="Dr. Jean Thomas"
              text=" General Physician"
            />
             
            
          </ul>
          <ul className="cards__items">
          
            <CardItem
              src="doc4.jpg"
              path="/doctors"
              label="Dr. Richard Kurian"
              text="Neurologist"
            />
            <CardItem
              src="doc3.jpg"
              path="/doctors"
              label="Dr. Samuel John"
              text=" Dermatologist"
            />
             {/* <CardItem
              src="doc5.jpg"
              path="/doctors"
              label="Dr. Kripal V N"
              text="Anesthesiologist"
            /> */}
            <CardItem
              src="doc6.jpg"
              path="/doctors"
              label="Dr. Merin John"
              text="Nephrologist"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
