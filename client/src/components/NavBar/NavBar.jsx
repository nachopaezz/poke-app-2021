import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import Search from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <header className={s.container}>
      <nav>
        <ul className={s.List}>
          <li className={s.ListItem}>
            <NavLink exact to="/Home">
              HOME
            </NavLink>
            <NavLink to="/Home/Add">ADD POKEMON</NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
      <div className={s.Search}>
        <div className={s.Searcher}>{<Search />}</div>
      </div>
    </header>
  );
}
