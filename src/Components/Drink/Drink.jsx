import React from "react";
import usePhotos from "../../Hooks/usePhoto";
import "./Drink.scss";
import Food from "../../Assets/img/food.svg";
import {Link} from 'react-router-dom'

function Drink({heading, setIsOpen, isOpen}) {
  const [photos, setPhotos] = usePhotos();
  return (
    <>
      <div className="heading__group">
        <img className="drink__image" src={Food} alt="bnnma" />
        <h3 className="gussie__username drink__heading">{heading}</h3>
        <span className="Drink__span">Recommended channel for you</span>
      </div>
      <ul className="gussie__list">
        {photos.length > 0 &&
          photos.splice(0, 6).map((item) => (
            <li className="gussie__item" key={item.id}>
              <Link onClick={()=>setIsOpen(true)} className="gussie__link" to={'playist/' + item.id}>
                <img className="gussie__image" src={item.url} alt="Image" />
                <h4 className="gussie__heading">{item.title}</h4>
                <span className="gussie__views">
                  {Math.floor(Math.random() * 1000) + "k" + " " + "views"}
                </span>
                <span className="gussie__time">
                  {Math.floor(Math.random() * 10) + " " + "months ago"}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Drink;
