import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-spotify mx-auto">
      <section className="content-footer white-color content-center flex">
        <div className="info-footer">
          <h5 className="mb-4">TESTAR O PREMIUM DE GRAÇA</h5>
          <p>
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </p>
        </div>
        <a href="" className="btn-destaque transition">
          <button>Inscreva-se grátis</button>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
