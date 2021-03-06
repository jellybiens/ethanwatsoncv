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

    changePageCSS(viewID){
console.log(viewID);
      this.props.changeCSS(viewID);
    }

         render() {
        return (
            <div className="headerBoard">
              <img src={ethanImg} ref="EthanImg" className="ethanImg imgStartUp" />
              <h1 className="nameHead nameStartUp">Ethan Watson</h1>
              <p className="contactHead delayAppear"><span className="emailHead">email: ethanwatson2603@outlook.com</span><span className="phoneHead">phone: +447480309550</span></p>
              <div className="viewButtons delayAppear">
              <div className="viewCode" onClick={() => this.props.changeView()}>{this.props.buttonText}</div>
              <div className="cssTemplate1" onClick={() => this.changePageCSS(1)} >CSS1</div>
              <div className="cssTemplate2" onClick={() => this.changePageCSS(2)} >CSS2</div>
              <div className="cssTemplate3" onClick={() => this.changePageCSS(3)} >CSS3</div>



              </div>

              <WelcomeMessage />


            </div>

        );
      }



}

export default TitleCard;
