import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="my-6">
      <nav className="navigation-header flex">
        <div className="search flex">
          <div className="btns-next-back flex">
            <button className="white-color fa-solid fa-chevron-left"></button>
            <button className="arrow-secundary white-color fa-solid fa-chevron-right"></button>
          </div>
          <div className="search-music transition flex">
            <i className="white-color fa-solid fa-magnifying-glass"></i>
            <input
              className="input-music"
              type="text"
              placeholder="O que você quer ouvir hoje?"
              name=""
              maxLength="400"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              id="input-music"
              value=""
            />
          </div>
        </div>
        <div className="user-account flex">
          <a href="">
            <button className="btn-inscreva transition text-color">
              Inscreva-se
            </button>
          </a>
          <a className="btn-destaque transition" href="">
            <button>Entrar</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
