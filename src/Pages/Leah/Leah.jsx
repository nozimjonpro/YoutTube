import React from "react";
import "../Nora/Nora.scss";
import leah from "../../Assets/img/Leah.svg";

import usePhoto from "../../Hooks/usePhoto";
import Cover from "../../Assets/img/Cover.png";
import Drink from "../../Components/Drink/Drink";
import Chanel from "../../Components/Chanel/Chanel";
import MainPart from "../../Components/Mainpart/Mainpart";
import {Routes, Route} from 'react-router-dom';
import Playist from "../Playist/Playist";

function Leah({ isOpen, setIsOpen }) {
  const [photos, setPhotos] = usePhoto();

  return (
    <section className="nora">
      <div className={`container ${isOpen ? "hidden-section" : ""}`}>
        <img
          className="nora__chanel-image"
          src={Cover}
          alt="Image"
          width={1230}
          height={280}
        />
        <Chanel heading="Leah Berry" image={leah}></Chanel>
        <MainPart></MainPart>

        <Drink
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          heading="Leah Berry videos"
        ></Drink>
      </div>
      <Routes>
        <Route path="playist/:id" element={<Playist />} />
      </Routes>
    </section>
  );
}

export default Leah;
