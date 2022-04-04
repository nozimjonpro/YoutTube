import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Gussie from "./Pages/Gussie/Gussie";
import Nora from "./Pages/Nora/Nora";
import Belle from "./Pages/Belle/Belle";
import Eunice from "./Pages/Euinice/Eunice";
import Emma from "./Pages/Emma/Emma";
import Leah from "./Pages/Leah/Leah";
import Home from "./Pages/Home/Home";
import Error from './Pages/Error/Error';
import Playist from "./Pages/Playist/Playist";
import "./App.scss";
import "./Components/Container.scss";

function AuthenticatedApp() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="container">
      <Header setIsOpen = {setIsOpen} isOpen = {isOpen}></Header>
      <div className="middle__part">
        <Navigation isOpen = {isOpen}></Navigation>
        <Routes>
          <Route path="/" element = {<Home isOpen = {isOpen} setIsOpen = {setIsOpen}  />}/>
          <Route path="blair/*" element={<Gussie isOpen = {isOpen} setIsOpen = {setIsOpen} />} />
          <Route path="nora/*" element = {<Nora isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="belle/*" element = {<Belle isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="eunice/*" element = {<Eunice isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="emma/*" element = {<Emma isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="leah/*" element = {<Leah isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="error/*" element = {<Error isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="errorjon" element = {<Error isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="errorbek" element = {<Error isOpen = {isOpen} setIsOpen = {setIsOpen}/>}/>
          <Route path="playist/:id" element = {<Playist/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default AuthenticatedApp;
