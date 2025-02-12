import React from "react";
import "./Aside.css";

function Aside() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-navigation p-3 my-6">
        <a className="logo mb-6" href="">
          <img
            src="../../public/icons/logo-spotify.png"
            alt="Logo do Spotify"
          />
        </a>
        <ul className="list-sidebar">
          <li>
            <a className="item-sidebar text-color flex fs-small" href="">
              <span className="icone-sidebar fa-solid fa-house"></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a className="item-sidebar text-color flex fs-small" href="">
              <span className="icone-sidebar fa-solid fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="sidebar-navigation flex">
        <div className="biblioteca flex p-3">
          <div className="title-directory flex">
            <span className="fa-solid fa-book fs-large"></span>
            <h5 className="fs-large">Sua biblioteca</h5>
          </div>
          <button className="fa-solid fa-plus text-color"></button>
        </div>
        <div className="playlist white-color">
          <h6 className="title-playlist mb-4">Crie sua primeira playlist</h6>
          <p className="text-playlist mb-4 fs-xsmall">
            É fácil, vamos te ajudar
          </p>
          <button className="button-playlist fs-xsmall transition">
            Criar playlist
          </button>
        </div>
        <a href="" className="cookies white-color fs-small transition">
          Cookies
        </a>
        <button className="language white-color fs-small transition mb-6">
          <span className="fa-solid fa-globe"></span>
          Português do Brasil
        </button>
      </nav>
    </aside>
  );
}

export default Aside;
