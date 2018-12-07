import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TabsLevel1 from './TabsLevel1';
import TabsLevel2 from './TabsLevel2';
import DisplayLevel from './DisplayLevel';
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
        <TabsLevel1 info={CVinfo} renderLevel2={this.renderTabsLevel2.bind(this)} renderDisplay={this.renderDisplayOnly.bind(this)} />
        <TabsLevel2 displayThis={this.state.display2} info={this.state.lev2info} renderDisplay={this.renderDisplayLevel.bind(this)}  />
        <TabsLevel2 displayThis={this.state.display2} info={this.state.lev2info} renderDisplay={this.renderDisplayLevel.bind(this)}  />
        <DisplayLevel displayThis={this.state.display3} info={this.state.continfo} heightTop={this.state.topPX} />
      </div>

    );
  }
}

CvContainer.propTypes = {
  info: PropTypes.array
}


export default CvContainer;
