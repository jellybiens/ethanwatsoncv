import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './index.css';
import './darcula.css';
import TitleCard from './Components/HeaderComponents/TitleCard';
import FlipCardView from './Components/FlipCardView';

class App extends Component
{


    constructor(){
      super();
        this.state = {
            show: "cv",
            buttonText: "Show Code"
        }
    }

    changeView(){
        this.state.show == "cv" ? this.setState({show:"code", buttonText: "Show CV"}) : this.setState({show:"cv", buttonText: "Show Code"});
    }


      render() {
        return (
          <div>
            <TitleCard changeView={() => this.changeView()} buttonText={this.state.buttonText} />
            <div className="delayAppear">
            <FlipCardView viewDisplay={this.state.show} />
            </div>
          </div>
        );
      }



}

App.propTypes = {
  info: PropTypes.array
}


export default App;
