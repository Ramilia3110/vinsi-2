import React, { useState } from "react";
import s from "./Navbar.module.scss";
import { Fa500Px } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={s.navbar}>
      <div className={s.logo}>
        <Fa500Px />
        <p>Vinsi</p>
      </div>

      <button className={s.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <ul className={`${s.navLinks} ${menuOpen ? s.showMenu : ""}`}>
        <li>
          <a href="#company">Company</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#studio">Studio</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>

        {/* Buttons move below links when menu is open */}
        <div className={`${s.buttons} ${menuOpen ? s.showButtons : ""}`}>
          <button className={s.search}>
            <IoSearchOutline />
          </button>
          <button className={s.get}>Get in touch</button>
          <button className={s.login}>Login</button>
        </div>
      </ul>
    </nav>
  );
}
