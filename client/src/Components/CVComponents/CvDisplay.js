import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';




class CvDisplay extends Component {


  renderChild(info)
  {
      if(info.type === "tabs")
          this.props.renderLevel2(info);
      else
          this.props.renderDisplay(info);
  }

  mapTabsinfo(info, i){

      let tabWidth = 100/this.props.info.info.length;
      let style = {width: tabWidth + "%"};
      return (
          <div style={style} key={i}
              className="button-default create"
              info={info}
              onClick={() => this.renderChild(info)}
          ><span>{info.title}</span></div>
      );
  }

  renderTabs(){
    return this.props.displayThis ? this.props.info.info.map(this.mapTabsinfo.bind(this)) : null

  }

  renderContent() {
    return this.props.displayThis ? this.props.info.info : null

  }


  render() {

    let divstyle = {top: this.props.heightTop + "px"};

        return (

          <CSSTransitionGroup
              transitionName={this.props.transNames}
               transitionEnterTimeout={700} transitionLeaveTimeout={0}
                transitionAppearTimeout={700}  transitionAppear={true}
               >
                <div className={this.props.classNames} key={this.props.info.id} style={divstyle}>
                      {this.props.info.type === "tabs" ? this.renderTabs() : this.renderContent()}
                </div>
          </CSSTransitionGroup>

        );

    }
}

CvDisplay.propTypes = {
  info: PropTypes.array
}

export default CvDisplay;
