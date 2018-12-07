import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CvContainer from './CVComponents/CvContainer';
import CodeContainer from './CodeComponents/CodeContainer';
import {CSSTransitionGroup} from 'react-transition-group';



class ViewCardFlip extends Component {


  render() {

    var classNameFlip = "";

    this.props.viewDisplay == "cv" ? classNameFlip = "flip-container" : classNameFlip = "flip-container hover";

    return (
            <div className={classNameFlip}>
            	<div className="flipper">
            		<div className="front">
            			<CvContainer />
            		</div>
            		<div className="back">
            			<CodeContainer  />
            		</div>
            	</div>
            </div>
    );
  }
}


export default ViewCardFlip;
