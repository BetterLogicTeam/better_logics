import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <div>
      <div className="solution_div">
        <div className="container">
          <p className="sub-title2">SOLUTIONS</p>
          <h2 className="title2">PROBLEMS & SOLUTIONS</h2>
          <p className="para2">
            More than $40 million in assets were placed under restraint pending
            forfeiture, and more than 30 <br></br>Liberty Reserve exchanger
            domain names were seized.
          </p>
          <div className="row rew">
            <div className="col-lg-6 col-md-12">
              <h4 className="four2 pt-5">PROBLEMS</h4>
              <div className="pera_garaph2">
                <p>
                  Different pieces of the new Internet are born as building
                  blocks, but there’s no way for them to work together.
                </p>
                <p>
                  Even interoperating new technologies with old centralised
                  resources can prove useful in making the paradigm shift from
                  Web 2 to Web 3 happen. Now we own our data, we can prove that
                  we own what we have and have created it on different
                  platforms, but how do we put it together into a whole new
                  cohesive framework.
                </p>
              </div>
            </div>
            

            <div className="col-lg-6 col-md-12 solution_img2">
              <img src="problem.png" alt="" />
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="solution_img">
                  <img src="solutions-graphic.png" alt="" />
                </div>
                
              </div>
              <div className="col-lg-6 col-md-12">
                  <h4 className="four2 pt-5">SOLUTIONS</h4>
                  <div className="pera_garaph2">
                    <p>
                      Decentralized cryptocurrency is produced by the entire
                      cryptocurrency system collectively, at a rate which is
                      defined when the system is created and which is publicly
                      known.
                    </p>
                    <p>
                      In centralized banking and economic systems such as the
                      Federal Reserve System, corporate boards or governments
                      control the supply of currency by printing units of fiat
                      money or demanding additions to digital banking ledgers.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
