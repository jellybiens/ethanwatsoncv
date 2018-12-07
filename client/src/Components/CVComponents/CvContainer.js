import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CvDisplay from './CvDisplay';
import {CVinfo} from './cvinfo';


class CvContainer extends Component {


  constructor(){
    super();
      this.state = {
          lev2info: [],
          continfo: {info: "\nSelect a category..."},
          display2: false,
          display3: true,
          topPX: 70
      }
  }

  renderDisplayOnly(info){
      this.setState({
          continfo: info,
          lev2info: [],
          display2:false,
          display3:true,
          topPX: 70 });

  }

  renderDisplayLevel(info){
      this.setState({
          continfo: info,
          display2:true,
          display3:true,
          topPX: 125
      });

  }

  renderTabsLevel2(info){

      this.setState({
          continfo: [],
          lev2info: info,
          display2:true,
          display3:false,
          topPX: 125});

  }


  render() {

    return (
      <div >
        <CvDisplay
          classNames="board content-home-tab"  transNames="homeAnimations"
          info={CVinfo} heightTop={0}
          displayThis={true}
          renderLevel2={this.renderTabsLevel2.bind(this)}
          renderDisplay={this.renderDisplayOnly.bind(this)} />
        <CvDisplay
          classNames="board content-info-tab"  transNames="tabsAnimations"
          info={this.state.lev2info} heightTop={70}
          displayThis={this.state.display2}
          renderDisplay={this.renderDisplayLevel.bind(this)}  />
        <CvDisplay
          classNames="board content-info-text"  transNames="textAnimations"
          info={this.state.continfo} heightTop={this.state.topPX}
          displayThis={this.state.display3} />
      </div>

    );
  }
}

CvContainer.propTypes = {
  info: PropTypes.array
}


export default CvContainer;
