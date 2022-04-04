import React from "react";
import "../Nora/Nora.scss";
import eunice from "../../Assets/img/eunice.svg";

import Cover from "../../Assets/img/Cover.png";
import Drink from "../../Components/Drink/Drink";
import Chanel from "../../Components/Chanel/Chanel";
import MainPart from "../../Components/Mainpart/Mainpart";
import { Routes, Route } from "react-router-dom";
import Playist from "../Playist/Playist";

function Eunice({ isOpen, setIsOpen }) {
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
        <Chanel heading="Eunice Cortez" image={eunice}></Chanel>
        <MainPart></MainPart>

        <Drink
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          heading="Eunice Cortez videos"
        ></Drink>
      </div>
      <Routes>
        <Route path="playist/:id" element={<Playist />} />
      </Routes>
    </section>
  );
}

export default Eunice;
