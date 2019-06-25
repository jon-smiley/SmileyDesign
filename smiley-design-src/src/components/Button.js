import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleSheet from '../style/buttonStyle.css';
import transitionSheet from '../style/transitionStyleSheet.css';
import { filterClassNameFunction } from '../logic/index.js';
import _ from 'lodash';


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleItem: new Array(),
      design: this.props.design,
      hoverAnimationClass: "",
      buttonValue: ['color', 'width', 'height', 'background', 'fontSize']
    }
  }
  
  componentWillMount = () => {
    this.setState(state => {
      const styleItem = [state.design];
        return {
          styleItem
        };
    });
  }

  // this function reads through the style sheet object and finds all the css modules that apply.
  findCssModules = (style) => {
    let result = _.find(styleSheet, function(value, key) {
      return (key === style ? value : undefined);
    });
    return (result ? result : '');
  }

  onHoverAnimation = () => {
    if(!this.state.hoverAnimationClass){
      this.setState(state => {
        const hoverAnimationClass = transitionSheet.defaultTransition;
          return {
            hoverAnimationClass
          }
      })
    }
    return;
  }

  render() {
    const { children, design, ...restButton } = this.props;
    let classFunctionClass = new filterClassNameFunction();
    let renderElementArray = classFunctionClass.renderStyleComponentTest(this.state.styleItem, this.state.buttonValue);
    let classStyleString = "";    

    for(var classString in renderElementArray){
      classStyleString += this.findCssModules(renderElementArray[classString]) + ' ';
    }

    if (!classStyleString){
      classStyleString = styleSheet.buttonDefaultDem + ' ';
    };

    return (
      <div>
        <button onMouseEnter={this.onHoverAnimation} className = {classStyleString + styleSheet.buttonDefault + ' ' + this.state.hoverAnimationClass} >
            { children }
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  dynamic : PropTypes.string,
  design: PropTypes.object
}
export default Button;