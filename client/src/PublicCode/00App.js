import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './index.scss';
import './fancy.scss';
import './darcula.css';
import TitleCard from './Components/HeaderComponents/TitleCard';
import FlipCardView from './Components/FlipCardView';

class App extends Component
{


    constructor(){
      super();
        this.state = {
            show: "cv",
            buttonText: "Show Code",
            cssClassName: "animationLoad paperBackground"
        }
    }

    changeView(){
        this.state.show == "cv" ? this.setState({show:"code", buttonText: "Show CV"}) : this.setState({show:"cv", buttonText: "Show Code"});
    }


    changePageCSS(viewID){

      console.log(viewID);

      switch(viewID) {
        case 1:
            this.setState({
              cssClassName: "paperBackground" });
          break;
        case 2:
            this.setState({
              cssClassName: "papyrus" });
          break;
        case 3:
            this.setState({
              cssClassName: "screen" });
          break;
        default:
            this.setState({
              cssClassName: "paperBackground" });
      }


    }

      render() {
        return (
          <div  className={this.state.cssClassName + "BG"}>
          <div className="container2">
          <input type="checkbox" id="switch" checked />
            <div className={this.state.cssClassName + "-box1"}>
              <div className={"container " + this.state.cssClassName + "1"}>
              <div class="overlay">AV-1</div>
                <TitleCard changeView={() => this.changeView()} buttonText={this.state.buttonText} changeCSS={(viewID) => this.changePageCSS(viewID)} />
                <div className="delayAppear">
                  <FlipCardView viewDisplay={this.state.show} />
                </div>
              </div>
            </div>
                <div className={this.state.cssClassName + "-box2"}>
                  <div className={this.state.cssClassName + "2"}></div>
              </div>
          </div>
          </div>

        );
      }



}

App.propTypes = {
  info: PropTypes.array
}


export default App;
