import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';


class CodeFileView extends Component {

  constructor(){
    super();
      this.state = {
          files: []
      }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ files: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/files');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  render() {

    let arrIn = this.state.files.findIndex(files => files.id === this.props.fileBodyId);
    let fileBody;

    this.props.fileBodyId != null ? fileBody = this.state.files[arrIn].body : fileBody = null;

    return (
      <div className="codeFileView">
      <Highlight language="javascript">
          {fileBody}
      </Highlight>
      </div>

    );
  }
}


export default CodeFileView;
