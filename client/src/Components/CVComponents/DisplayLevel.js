import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';




class DisplayLevel extends Component {




  render() {
    let divstyle = {top: this.props.heightTop + "px"};

    return (
      <CSSTransitionGroup
          transitionName="textAnimations"
           transitionEnterTimeout={700} transitionLeaveTimeout={0}
            transitionAppearTimeout={700}  transitionAppear={true}
           >
            <div className="board content-info-text" key={this.props.info.id} style={divstyle}>
                    {this.props.displayThis ? this.props.info.info : null}
            </div>
        </CSSTransitionGroup>
    )
  }
}


DisplayLevel.propTypes = {
  info: PropTypes.array
}


export default DisplayLevel;
