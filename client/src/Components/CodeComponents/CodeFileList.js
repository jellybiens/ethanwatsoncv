import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CodeListItem from './CodeListItem';


class CodeFileList extends Component {

  constructor(){
    super();
      this.state = {
          files: [],
          activeButton: null
      }
  }

  handleLoadFile(fileId){
      this.setState({activeButton: fileId});
      this.props.loadFilePropFunc(fileId);
  }



  buildItems(fileName, i){

    var className;
    i == this.state.activeButton ?  className = "codeListItem active" : className = "codeListItem"

    return(
            <CodeListItem className={className} loadFilePropFunc={() => this.handleLoadFile(i)} key={i} id={i} fileTitle={fileName.substring(2)} />
          );
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ files: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/fileNames');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  render() {
    return (
      <div className="codeListContainer">
        <span>File select...</span>
        {this.state.files.map(this.buildItems.bind(this))}
      </div>
    );
  }
}


export default CodeFileList;
