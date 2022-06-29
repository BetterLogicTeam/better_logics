import React from "react";
import "./Token.css";

function Token() {
  return (
    <div>
      <div className="Token_div">
        <div className="container">
          <p className="Token_sub-title">TOKEN STATS</p>
          <h2 className="Token_title">TOKEN DISTRIBUTION</h2>
          <p className="Token_para">
            The ICO usually takes place before the project is completed, and
            helps fund the expenses <br></br>undertaken by the founding team
            until launch. For some of the larger projects.
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h4 className="Token_four pt-5">Details</h4>
              <div className="Token_pera_garaph">
                <p>
                To calculate the number of tokens you’ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,
                </p>
                <p>
                To calculate the number of tokens you’ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,<br></br>
                
                </p>
              </div>
              <div className="">
              <span className="symbol">Symbol:</span> <span className="espan">CIC</span> <br></br><span className="symbol">Initial Value:</span> <span className="espan">1 ETH = 3177.38 CIC</span><br></br><span className="symbol">Type:</span> <span className="espan">ERC20</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
                    <div className="Token_img">
                        <img src="chart.png" alt="" />
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
