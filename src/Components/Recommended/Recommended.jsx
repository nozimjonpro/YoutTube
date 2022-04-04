import React from "react";
import usePhotos from "../../Hooks/usePhoto";
import "./Recommended.scss";
import {Link, Routes, Route} from 'react-router-dom';
import Playist from "../../Pages/Playist/Playist";

function Recommended({isOpen}) {
  const [photos, setPhotos] = usePhotos();

  return (
    <section className={`gussiejon ${isOpen? 'gussiejon--active' : ''}`}>
      <h3 className="gussie__username">
        Recommended
      </h3>
      <ul className="gussie__list-recommendent">
        {photos.length > 0 &&
          photos.splice(0, 3).map((item) => (
            <li className="gussie__item" key={item.id}>
              <Link className="gussie__link" to="playist">
                <img
                  className="gussie__image"
                  src={item.url}
                  alt="Image"
                  width={520}
                  height={250}
                />
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
    </section>
  );
}

export default Recommended;
