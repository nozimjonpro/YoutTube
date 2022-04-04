import React from "react";
import "./Gussie.scss";
import Ovalbright from "../../Assets/img/Ovalbright.svg";
import usePhotos from "../../Hooks/usePhoto";
import Recommended from "../../Components/Recommended/Recommended";
import Drink from "../../Components/Drink/Drink";
import { Link, Routes, Route } from "react-router-dom";
import Playist from "../Playist/Playist";

function Gussie({ isOpen, setIsOpen }) {
  const [photos, setPhotos] = usePhotos();

  return (
    <section className="gussie">
      <div className={`container ${isOpen ? "hidden-section" : ""}`}>
        <h3 className="gussie__username">
          <img
            className="gussie__user-img"
            src={Ovalbright}
            alt="Image"
            width={50}
            height={50}
          />{" "}
          Gussie Singleton
        </h3>
        <ul className="gussie__list">
          {photos.length > 0 &&
            photos.splice(0, 6).map((item) => (
              <li className="gussie__item" key={item.id}>
                <Link className="gussie__link" to={'playist/' + item.id} onClick={()=>setIsOpen(true)}>
                  <img className="gussie__image" src={item.url} alt="Image" />
                  <h4 className="gussie__heading">{item.title}</h4>
                  <span className="gussie__views">
                    {Math.floor(Math.random() * 1000) + "k" + " " + "views"}
                  </span>
                  <span className="gussie__time">
                    {Math.floor(Math.random() * 10) + " " + "months ago"}
                  </span>
                  <span className="gussie__time">Gussie</span>
                </Link>
              </li>
            ))}
        </ul>
        <Recommended isOpen={isOpen}></Recommended>
        <Drink
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          heading="Food & Drink"
        ></Drink>
      </div>
      <Routes>
        <Route path="playist/:id" element={<Playist />} />
      </Routes>
    </section>
  );
}

export default Gussie;
