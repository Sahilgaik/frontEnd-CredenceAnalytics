import React, { useState, useEffect } from 'react';
import './Credence.css'
import Down from './images/icon-down.svg';
import Facebook from './images/icon-facebook.svg'
import Instagram from './images/icon-instagram.svg'
import Twitter from './images/icon-twitter.svg'
import Up from './images/icon-up.svg'
import Youtube from './images/icon-youtube.svg'

const Credence = () => {
   
    const [isDarkTheme, setIsDarkTheme] = useState(false);


    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('darkEffect');
            document.body.classList.remove('lightEffect');
        } else {
            document.body.classList.add('lightEffect');
            document.body.classList.remove('darkEffect');
        }
    }, [isDarkTheme]);


    const handleClick = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };


  return (
    <div>
        <header>
      <div class="container">
        <div class="flex-header">
          <div class="content">
            <h1>Social Media Dashboard</h1>
            <p class="total-count">Total Followers: 23,250</p>
          </div>
          <hr />

          <div className="switchTheme">
         <p> Switch to {isDarkTheme ? 'Light Mode' : 'Dark Mode'}</p>
            <div className={`switchTheme-btn ${isDarkTheme ? 'off' : ''}`} id="switchTheme" onClick={handleClick}>
                <div className="circular-btn"></div>
            </div>
        </div>
        </div>
      </div>
    </header>

    <main>
      <section class="overallPattern">
        <div class="container">
          <div class="overallPattern-cards">
            <div class="overallPattern-card">
              <div class="bar bar-facebookItem"></div>
              <div class="userProfile">
                <div class="icon">
                 <img src={Facebook} alt ="Facebook-icon" />
                </div>
                <p>@sahil_287</p>
              </div>

              <p class="overallPattern-number">1900</p>
              <p class="overallPattern-unit text-regular">Followers</p>

              <div class="overallPattern-atPresent">
                <div class="icon">
                  <img src={Up} alt = "up-arrow" />
                </div>
                <p>12 Today</p>
              </div>
            </div>

            <div class="overallPattern-card">
              <div class="bar bar-twitterItem"></div>
              <div class="userProfile">
                <div class="icon">
                  <img src={Twitter} alt = "twitter-icon" />
                </div>
                <p>@Sahil_Gaikwad_143</p>
              </div>

              <p class="overallPattern-number">1100</p>
              <p class="overallPattern-unit text-regular">Followers</p>

              <div class="overallPattern-atPresent">
                <div class="icon">
                  <img src={Up} alt = "up-arrow" />
                </div>
                <p>99 Today</p>
              </div>
            </div>

            <div class="overallPattern-card">
              <div class="bar bar-instagramItem"></div>
              <div class="userProfile">
                <div class="icon">
                  <img src={Instagram} alt = "Instagram-icon" />
                </div>
                <p>@realSaheaaal</p>
              </div>

              <p class="overallPattern-number">12k</p>
              <p class="overallPattern-unit text-regular">Followers</p>

              <div class="overallPattern-atPresent">
                <div class="icon">
                  <img src={Up} alt = "up-arrow" />
                </div>
                <p>1099 Today</p>
              </div>
            </div>

            <div class="overallPattern-card">
              <div class="bar bar-youtubeItem"></div>
              <div class="userProfile">
                <div class="icon">
                  <img src={Youtube} alt = "Youtube-icon" />
                </div>
                <p>@Sahil GAIKWAD</p>
              </div>

              <p class="overallPattern-number">8250 </p>
              <p class="overallPattern-unit text-regular">SUBSCRIBERS</p>

              <div class="overallPattern-atPresent">
                <div class="icon">
                  <img src={Down} alt = "down-arrow" />
                </div>
                <p class="overallPattern-down">144 Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="outLine">
        <div class="container">
          <h3>Overview - Today</h3>
          <div class="outLine-cards">
            <div class="outLine-card">
              <div class="outLine-title">
                <p>Page Views</p>
                <div class="icon">
                  <img src={Facebook} alt = "Facebook-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>87</p>
                <div class="outLine-up">
                  <div class="icon">
                    <img src={Up} alt = "up-arrow" />
                  </div>
                  <p>3%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Likes</p>
                <div class="icon">
                  <img src={Facebook} alt = "Facebook-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>52</p>
                <div class="outLine-down">
                  <div class="icon">
                    <img src={Down} alt = "Down-arrow" />
                  </div>
                  <p>2%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Likes</p>
                <div class="icon">
                  <img src={Instagram} alt = "instagram-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>5462</p>
                <div class="outLine-up">
                  <div class="icon">
                    <img src={Up} alt = "up-arrow" />
                  </div>
                  <p>2257%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Profile Views</p>
                <div class="icon">
                  <img src={Instagram} alt = "instagram-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>52k</p>
                <div class="outLine-up">
                  <div class="icon">
                    <img src={Up} alt = "up-arrow" />
                  </div>
                  <p>1375%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Retweets</p>
                <div class="icon">
                  <img src={Twitter} alt = "twitter-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>117</p>
                <div class="outLine-up">
                  <div class="icon">
                    <img src={Up} alt = "up-arrow" />
                  </div>
                  <p>303%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Likes</p>
                <div class="icon">
                  <img src={Twitter} alt = "twitter-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>507</p>
                <div class="outLine-up">
                  <div class="icon">
                    <img src={Up} alt = "up-arrow" />
                  </div>
                  <p>553%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Likes</p>
                <div class="icon">
                  <img src={Youtube} alt = "youtube-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>107</p>
                <div class="outLine-down">
                  <div class="icon">
                    <img src={Down} alt = "down-arrow" />
                  </div>
                  <p>19%</p>
                </div>
              </div>
            </div>

            <div class="outLine-card">
              <div class="outLine-title">
                <p>Total Views</p>
                <div class="icon">
                  <img src={Youtube} alt = "youtube-icon" />
                </div>
              </div>

              <div class="outLine-stats">
                <p>1407</p>
                <div class="outLine-down">
                  <div class="icon">
                    <img src={Down} alt = "down-arrow" />
                  </div>
                  <p>12%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main> 
    </div>
  )
}

export default Credence