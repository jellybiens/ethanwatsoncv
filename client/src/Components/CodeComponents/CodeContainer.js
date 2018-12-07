import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CodeFileList from './CodeFileList';
import CodeFileView from './CodeFileView';


class CodeContainer extends Component {

  constructor(){
    super();
      this.state = {
          fileBodyId: null
      }
  }

  handleLoadFile(fileId){

    this.setState({fileBodyId: fileId});


  }




  render() {
    return (
      <div className="codeViewContainer">
          <CodeFileList loadFilePropFunc={(fileId) => this.handleLoadFile(fileId)} />

          <CodeFileView fileBodyId={this.state.fileBodyId} />

      </div>

    );
  }
}


export default CodeContainer;
