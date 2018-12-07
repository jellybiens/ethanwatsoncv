import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class WelcomeMessage extends Component
{


        constructor() {
           super();
           this.state = { textIdx: 0, style: {} };
         }

         componentDidMount() {
           this.timeout = setInterval(() => {
             let currentIdx = this.state.textIdx;
             this.setState({ textIdx: currentIdx + 1 });
           }, 500);


           this.timeout2 = setTimeout(() => {
             this.setState({style: {display:"none"}});
             clearInterval(this.timeout);
           }, 9000);


         }

         render() {
           const welcomeText = ['Bun venit', 'Welcome', 'Bienvenu', 'Willkommen'];
           let welcomeChange = welcomeText[this.state.textIdx % welcomeText.length];

        return (
                  <div style={this.state.style} className="welcomeMessageShow ">
                    <span>{welcomeChange} <br />TO MY <span className="reactColour">REACT</span> CV</span>
                  </div>

        );
      }



}

export default WelcomeMessage;
