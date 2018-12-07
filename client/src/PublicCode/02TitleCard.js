import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WelcomeMessage from './WelcomeMessage';
import ethanImg from './Ethan.jpg';

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


          comingSoon(){

            //"Changeable Styling coming soon!"
            //                <div className="cssTemplates" >Abc</div>
            //                <div className="cssTemplates" >Abc</div>
          }

         render() {
        return (
            <div className="headerBoard">
              <img src={ethanImg} ref="EthanImg" className="ethanImg imgStartUp" />
              <h1 className="nameHead nameStartUp">Ethan Watson</h1>
              <p className="contactHead delayAppear"><span className="emailHead">email: ethanwatson2603@outlook.com</span><span className="phoneHead">phone: +447480309550</span></p>
              <div className="viewButtons delayAppear">
              <div>

              </div>
              <div className="viewCode" onClick={() => this.props.changeView()}>{this.props.buttonText}</div>
              </div>

              <WelcomeMessage />


            </div>

        );
      }



}

export default TitleCard;
