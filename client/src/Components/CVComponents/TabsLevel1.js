import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';




class TabsLevel1 extends Component {


  constructor(){
    super();
      this.state = {

      }
  }

  renderChild(info)
  {
      if(info.type === "tabs")
          this.props.renderLevel2(info);
      else
          this.props.renderDisplay(info);
  }

  mapTabsinfo(info, i){

      let tabWidth = 100/this.props.info.length;
      let style = {width: tabWidth + "%"};
      return (
          <div style={style} key={i}
              className="button-default create"
              info={info}
              onClick={() => this.renderChild(info)}
          ><span>{info.title}</span></div>
      );
  }



  render() {
    return (
              <div className="board content-home-tab">
                  {this.props.info.map(this.mapTabsinfo.bind(this))}
              </div>

    );
  }
}

TabsLevel1.propTypes = {
  info: PropTypes.array
}

export default TabsLevel1;
