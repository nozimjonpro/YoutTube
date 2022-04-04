import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, Link } from "react-router-dom";
import Bald from "../../Assets/img/Bald.svg";
import adult from "../../Assets/img/adult.svg";
import senior from "../../Assets/img/senior.svg";
import usePhoto from "../../Hooks/usePhoto";


function MainPart(){
    const [photos, setPhotos] = usePhoto()
    return(
        <div className="nora__main">
        <div>
          <nav className="nav-nora">
            <ul className="nav__list-nora">
              <li className="nav__item-nora">
                <NavLink to="" className="nav__link-nora">
                  Home
                </NavLink>
              </li>
              <li className="nav__item-nora">
                <NavLink to="error" className="nav__link-nora">
                  Videos
                </NavLink>
              </li>
              <li className="nav__item-nora">
                <NavLink to="error" className="nav__link-nora">
                  Playists
                </NavLink>
              </li>
              <li className="nav__item-nora">
                <NavLink to="error" className="nav__link-nora">
                  Channels
                </NavLink>
              </li>
              <li className="nav__item-nora">
                <NavLink to="error" className="nav__link-nora">
                  Discussion
                </NavLink>
              </li>
              <li className="nav__item-nora">
                <NavLink to="error" className="nav__link-nora">
                  About
                </NavLink>
              </li>
              <li className="nav__item-nora">
                <SearchIcon />
              </li>
            </ul>
          </nav>
          <div className="nora__middle">
            <img
              className="nora__middle-image"
              src={photos[3].url}
              alt="Image"
              width={450}
              height={250}
            />
            <div className="nora__middle-info">
              <h3 className="nora__middle-heading">
                Choosing The Best Audio Player Software For Your Computer
              </h3>
              <p className="nora__middle-text">
                Your cheap internet-based banner advertising will become one
                of the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and
                intrusive pop-ups. Bayles A common medium for advertising on
                the Internet is the use of banner ads.{" "}
              </p>
              <span className="gussie__views">
                {Math.floor(Math.random() * 1000) + "k" + " " + "views"}
              </span>
              <span className="gussie__time">
                {Math.floor(Math.random() * 10) + " " + "months ago"}
              </span>
            </div>
          </div>
        </div>
        <div className="nora__recommend">
          <h4 className="nore__recommend-heading">Recommended channel</h4>
          <ul className="nora__recommend__list">
            <li className="nora__recommend-item">
              <Link className="nora__recommend-link" to="">
                <img
                  className="nora__recommend-image"
                  src={Bald}
                  alt="Image"
                />
                <h5 className="nora__recommend-name">Flora Benson</h5>
              </Link>
              <Link className="nora__recommend-link" to="">
                <img
                  className="nora__recommend-image"
                  src={adult}
                  alt="Image"
                />
                <h5 className="nora__recommend-name">Flora Benson</h5>
              </Link>
              <Link className="nora__recommend-link" to="">
                <img
                  className="nora__recommend-image"
                  src={senior}
                  alt="Image"
                />
                <h5 className="nora__recommend-name">Flora Benson</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default MainPart;