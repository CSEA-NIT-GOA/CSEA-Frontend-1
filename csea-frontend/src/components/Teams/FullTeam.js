import React from 'react'
import './fullteam.css'
function FullTeam() {
  return (<>
      <div className="main">
          <div className="profile-card">
              <div className="img">
                  <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"/>
              </div>
              <div className="caption">
                  <h3>Vin Diesel</h3>
                  <p>Senior App Developer</p>
                  <div className="social-links">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
              </div>
          </div>
          <div className="profile-card">
              <div className="img">
                  <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"/>
              </div>
              <div className="caption">
                  <h3>David Corner</h3>
                  <p>Front End Developer</p>
                  <div className="social-links">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
              </div>
          </div>
          <div className="profile-card">
              <div className="img">
                  <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg"/>
              </div>
              <div className="caption">
                  <h3>Tom Cruise</h3>
                  <p>Full Stact Developer</p>
                  <div className="social-links">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default FullTeam