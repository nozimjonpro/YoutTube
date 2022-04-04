import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import "./Navigation.scss";
import "../Container.scss";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import FolderIcon from "@mui/icons-material/FolderOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsEsportsIcon from "@mui/icons-material/SportsEsportsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Navigation( {isOpen} ) {
  
  return (
 <>
    <nav className={`nav ${isOpen? 'nav--active' : ''}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="">
            <HomeIcon className="nav__icons" /> Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="error">
            <LocalFireDepartmentIcon className="nav__icons" /> Trending
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="errorjon">
            <SubscriptionsIcon className="nav__icons" /> Subscriptions
          </NavLink>
        </li>
      </ul>
      <ul className="nav__extension">
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <FolderIcon className="nav__icons" /> Library
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <HistoryEduIcon className="nav__icons" /> History
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <AccessAlarmsIcon className="nav__icons" /> Watch later
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <StarBorderIcon className="nav__icons" /> Favourites
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <FavoriteBorderIcon className="nav__icons" /> Liked videos
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <LibraryMusicIcon className="nav__icons" /> Music
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <SportsEsportsIcon className="nav__icons" /> Games
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="errorbek">
            <ExpandMoreIcon className="nav__icons" /> Show more
          </Link>
        </li>
      </ul>
      <h3 className="navigation__heading">Subscriptions</h3>
      <ul className="subs__list">
        <li className="subs__item">
          <NavLink to="/blair" className="subs__links"><AccountCircleIcon className="nav__icons nav__icons-account"/>Gussie SingLinketon</NavLink>
        </li>
        <li className="subs__item">
          <NavLink to="/nora" className="subs__links"><AccountCircleIcon className="nav__icons nav__icons-account"/>Nora Francis</NavLink>
        </li>
        <li className="subs__item">
          <NavLink to="/belle" className="subs__links"><AccountCircleIcon className="nav__icons nav__icons-account"/>Belle Briggs</NavLink>
        </li>
        <li className="subs__item">
          <NavLink to="/eunice" className="subs__links"><AccountCircleIcon className="nav__icons nav__icons-account"/>Eunice Cortez</NavLink>
        </li>
        <li className="subs__item">
          <NavLink to="/emma" className="subs__links"><AccountCircleIcon className="nav__icons nav__icons-account"/>Emma Hanson</NavLink>
        </li>
        <li className="subs__item">
          <NavLink to="/leah" className="subs__links"><AccountCircleIcon className="nav__icons nav__icons-account"/>Leah Berry</NavLink>
        </li>
      </ul>
    </nav>
 </>
  );
}

export default Navigation;
