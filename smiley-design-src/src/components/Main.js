import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styleSheet from '../style/mainStyle.css';
import { filterClassNameFunction , globalValues } from '../logic/index.js';
import _ from 'lodash';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleItem: new Array(),
            design: this.props.design,
            mainValue: ['mainContainer', 'subContainer', 'navPosition']
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

      findCssModules = (style) => {
        let result = _.find(styleSheet, function(value, key) {
          return (key === style ? value : undefined);
        });
        return (result ? result : '');
      }
      

    render() {
        var { children, typeContainer } = this.props;
        let classFunctionClass = new filterClassNameFunction();
        let renderElementArray = classFunctionClass.renderStyleComponentTest(this.state.styleItem, this.state.mainValue);
        let classStyleString = globalValues.space;
        classStyleString += (typeContainer === globalValues.main) ? styleSheet.mainContainer : styleSheet.subContainer;
        
        classStyleString += globalValues.space;
        for (var classString in renderElementArray){
            classStyleString += this.findCssModules(renderElementArray[classString]) + globalValues.space;
        }

        if (globalValues.navSidebarPosition){
            classStyleString += styleSheet.navPositionSide;
        } 
        if ((window.navigator.userAgent.indexOf(globalValues.chrome) != -1) && (typeContainer === globalValues.main)){
          classStyleString += styleSheet.mainChromeContainer + globalValues.space;
        }

        return (
            <Fragment>
                <div className={classStyleString}>
                  {children}
                </div>
            </Fragment>
        )
    }
}

Main.propTypes = {
    design: PropTypes.object,
    typeContainer: PropTypes.string.isRequired
}

export default Main;