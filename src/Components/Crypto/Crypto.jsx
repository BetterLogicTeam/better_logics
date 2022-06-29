import React from "react";
import "./Crypto.css";

function Crypto() {
  return (
    <div>
      <div className="crypto_div">
        <div className="container">
          <div className="row">
            <p className="sub-title">About</p>
            <h2 className="title">What is Crypto ICO</h2>
            <p className="para">
              Crypto ICO aims to disrupt the cryptotrading industry by lowering
              the barrier <br></br>
              to creating algorithmic trading models.
            </p>
            <div className="col-lg-6 col-md-12">
              <h4 className="four">
                We built a platform for<br></br> The crypto trading Industry
              </h4>
              <h5 className="five">
                Cryptocurrency exchanges or digital currency exchanges (DCE) are
                businesses that allow customers to trade cryptocurrencies or
                digital currencies for other assets.
              </h5>
              <div className="pera_garaph">
                <p>
                  Cryptocurrency exchanges or digital currency exchanges (DCE)
                  are businesses that allow customers to trade cryptocurrencies
                  or digital currencies for other assets
                </p>
                <p>
                  Creators of digital currencies are often independent of the
                  DCEs that trade the currency.[6] In one type of system,
                  digital currency providers (DCP), are businesses that keep and
                  administer accounts.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 crypto_img">
              <img src="crypto.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
