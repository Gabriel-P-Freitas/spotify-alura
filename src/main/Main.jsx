import React from "react";
import "./main.css";

function Main() {
  return (
    <main className="white-color">
      <h1 id="greeting" className="mb-6">
        Seja bem vindo Gabriel
      </h1>
      <h2 className="mb-6">Navegar por todas as seções</h2>
      <section className="mb-6">
        <div id="result-playlists">
          <nav className="">
            <ul className="offer-list">
              <li className="offer-list-item offer-list-item-1 transition">
                <a className="white-color p-3" href="">
                  <h3>Boas festas</h3>
                  <img src="../../public/playlist/1.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-2 transition">
                <a className="white-color p-3" href="">
                  <h3>Feitos para você</h3>
                  <img src="../../public/playlist/2.png" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-3 transition">
                <a className="white-color p-3" href="">
                  <h3>Lançamentos</h3>
                  <img src="../../public/playlist/3.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-4 transition">
                <a className="white-color p-3" href="">
                  <h3>Creators</h3>
                  <img src="../../public/playlist/6.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-5 transition">
                <a className="white-color p-3" href="">
                  <h3>Podcasts</h3>
                  <img src="../../public/playlist/4.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-6 transition">
                <a className="white-color p-3" href="">
                  <h3>Sertanejo</h3>
                  <img src="../../public/playlist/7.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-7 transition">
                <a className="white-color p-3" href="">
                  <h3>Louvor ao Deus Altíssimo</h3>
                  <img
                    src="../../public/playlist/louvor-Deus.svg"
                    alt="Disco louve a Deus"
                  />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-8 transition">
                <a className="white-color p-3" href="">
                  <h3>Rock Gospel</h3>
                  <img
                    src="../../public/playlist/rock-gospel.svg"
                    alt="Disco Oficina G3"
                  />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-9 transition">
                <a className="white-color p-3" href="">
                  <h3>MPB</h3>
                  <img src="../../public/playlist/10.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-10 transition">
                <a className="white-color p-3" href="">
                  <h3>Hip Hop</h3>
                  <img src="../../public/playlist/15.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-11 transition">
                <a className="white-color p-3" href="">
                  <h3>Indle</h3>
                  <img src="../../public/playlist/13.jpeg" alt="" />
                </a>
              </li>
              <li className="offer-list-item offer-list-item-12 transition">
                <a className="white-color p-3" href="">
                  <h3>Relax</h3>
                  <img src="../../public/playlist/14.jpeg" alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="result-artist" className="hidden">
          <div className="grid-container">
            <div className="artist-card transition" id="card-artist">
              <div className="card-img">
                <img id="artist-img" className="artist-img" />
                <a href="" className="play white-color p-3" id="play-artist">
                  <span className="fs-small fa fa-solid fa-play"></span>
                </a>
              </div>
              <div className="card-text">
                <a title="Foo Fighters" className="vst" href=""></a>
                <p className="artist-name" id="artist-name"></p>
                <span className="artist-categorie text-color">Artista</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
