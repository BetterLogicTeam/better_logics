import React from 'react';
import './Coin.css'

function Coin() {
  return (
    <div>
        <div className="coin_div">
            <div className="container">
            <p className="coin_sub-title">ABOUT COIN</p>
          <h2 className="coin_title">OUR COIN</h2>
          <p className="coin_para">
          Decentralized cryptocurrency is produced by the entire cryptocurrency system collectively <br></br>at a rate which is defined when the system is created and which is publicly known.
          </p>
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="coin_img">
                        <img src="our-coin.png" alt="" />
                    </div>
                </div>
                    <div className="col-lg-6 col-md-12">
                    <h4 className="coin_four pt-5">CIC COIN</h4>
            <div className="coin_pera_garaph">
                <p>
                The validity of each cryptocurrency's coins is provided by a blockchain. A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography.Each block typically contains a hash pointer as a link to a previous block, a timestamp and transaction data. By design, blockchains are inherently resistant to modification of the data. a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol for validating new blocks. Once recorded
                </p>
                <p>
                The block time is the average time it takes for the network to generate one extra block in the blockchain.[21] Some blockchains create a new block as frequently as every five seconds.
                </p>
              </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coin