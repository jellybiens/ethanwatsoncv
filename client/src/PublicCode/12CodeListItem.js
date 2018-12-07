import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class CodeListItem extends Component {



  handleLoadFile(){
    this.props.loadFilePropFunc();
  }



  render() {

    return (
      <div key={this.props.id} className={this.props.className} onClick={() => this.handleLoadFile()}>
          <span>{this.props.fileTitle}</span>
      </div>

    );
  }
}


export default CodeListItem;
