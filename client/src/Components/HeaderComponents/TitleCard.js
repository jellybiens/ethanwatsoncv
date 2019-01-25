import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WelcomeMessage from './WelcomeMessage';
import ethanImg from './Ethan.jpg';
import githubImg from './images/github.png';
import linkedinImg from './images/linkedin.png';
import twitterImg from './images/twitter.png';

class TitleCard extends Component
{

  constructor(){
    super();
      this.state = {
          buttonText: "View Code"
      }
  }

    changeView(){

      this.setState({buttonText:"View CV"});

      this.props.changeView();
    }

    changePageCSS(viewID){
console.log(viewID);
      this.props.changeCSS(viewID);
    }

         render() {
        return (
            <div className="headerBoard">

            <div className="links-container delayAppear">
                  <div className="links">
                    <a href="https://twitter.com/jellybiens_"><img src={twitterImg} /></a>
                    <a href="https://www.linkedin.com/in/ethan-w-a1676a92/"><img src={linkedinImg} /></a>
                    <a href="https://github.com/jellybiens" className="githA"><img src={githubImg} className="gith" /></a>
                  </div>
            </div>


              <img sre={ethanImg} ref="EthanImg" className="ethanImg imgStartUp" />
              <h1 className="nameHead nameStartUp">Ethan Watson</h1>
              <p className="contactHead delayAppear"><span className="emailHead">email: ethanwatson2603@outlook.com</span><span className="phoneHead">phone: +447480309550</span></p>
              <div className="viewButtons delayAppear">
              <div className="viewCode" onClick={() => this.props.changeView()}>{this.props.buttonText}</div>
              <div className="cssTemplate1" onClick={() => this.changePageCSS(1)} >CSS Paper</div>
              <div className="cssTemplate2" onClick={() => this.changePageCSS(2)} >CSS Papyrus</div>
              <div className="cssTemplate3" onClick={() => this.changePageCSS(3)} >CSS CRT</div>



              </div>

              <WelcomeMessage />


            </div>

        );
      }



}

export default TitleCard;
