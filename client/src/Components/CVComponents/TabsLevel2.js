import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';



class TabsLevel2 extends Component {





  renderChild(info)
  {
      this.props.renderDisplay(info);
  }

  mapTabsinfo(info){
      let tabWidth = 100/this.props.info.info.length;
      let style = {width: tabWidth + "%"};
      return (
              <div style={style} key={info.id} className="button-default create"
                      info={info}
                      onClick={() => this.renderChild(info)}>
                  <span>{info.title}</span>
              </div>
      );
  }


  render() {

    return (
      <CSSTransitionGroup
          transitionName="tabsAnimations"
           transitionEnterTimeout={700} transitionLeaveTimeout={0}
            transitionAppearTimeout={700}  transitionAppear={true}
           >
            <div className="board content-info-tab" key={this.props.info.id}>
                  {this.props.displayThis ? this.props.info.info.map(this.mapTabsinfo.bind(this)) : null}
            </div>
      </CSSTransitionGroup>

    );
  }
}

TabsLevel2.propTypes = {
  info: PropTypes.object
}



export default TabsLevel2;
