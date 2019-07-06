import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styleSheet from '../style/navBarStyle.css';
import { filterClassNameFunction, globalState, globalValues } from '../logic/index.js';
import _ from 'lodash';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleItem: new Array(),
            buttons: new Array(),
            design: this.props.design,
            navBarButtons: this.props.navBarButtons,
            navValue: ['background', 'sticky']
        }
    }

    componentWillMount = () => {
        this.setState(state => {
          const styleItem = [state.design];
          const buttons = [state.navBarButtons];
            return {
              styleItem,
              buttons
            };
        });
        if (this.props.navSidebarPosition){
            new globalState().setGlobalStates('navSidebarPosition', this.props.navSidebarPosition);
        }
      }

      findCssModules = (style) => {
        let result = _.find(styleSheet, function(value, key) {
          return (key === style ? value : undefined);
        });
        return (result ? result : globalValues.space);
      }

    render() {
        var { children, design, search, navSidebarPosition, ...navProps } = this.props;
        let navTopPositioning = (navSidebarPosition) ? globalValues.space :  styleSheet.navTopPositioning;
        let classFunctionClass = new filterClassNameFunction();
        let renderElementArray = classFunctionClass.renderStyleComponentTest(this.state.styleItem, this.state.navValue);


        let classStyleString = globalValues.space;
        for (var classString in renderElementArray){
            classStyleString += this.findCssModules(renderElementArray[classString]) + globalValues.space;
        }
        var navFloatRight = (navSidebarPosition === globalValues.right ? styleSheet.navFloatRight : globalValues.space);

       if (navSidebarPosition){
            if(navSidebarPosition === globalValues.right){
                classStyleString += styleSheet.navSideDisplayRightEdit;
            } else {
                classStyleString += styleSheet.navSideDisplayLeftEdit;
            }
       } else {
            classStyleString += styleSheet.navTopPositioningBoxShadow;
       }

        return (
            <Fragment>
                {/* changing nav bar, top bar */}
                <div className={navFloatRight}>
                    <div className={navTopPositioning}>
                        <div className={styleSheet.navBarDefault + classStyleString}>
                                {children}
                        </div>
                    </div>
                    { (!navSidebarPosition) ? 
                        <div className={styleSheet.basicSpacing}>
                        </div> : globalValues.space
                    }
                </div>
                {/* Moving navBar with fixed bar */}
                { (navSidebarPosition) ?
                    <div className={styleSheet.navFixedContainer}>
                        <div>
                            <div className={styleSheet.navBarDefault + classStyleString}>
                                {children}
                            </div>
                        </div>
                    </div>
                    : globalValues.space
                }
            </Fragment>
        )
    }
}

NavBar.propTypes = {
    dynamic : PropTypes.string,
    design: PropTypes.object,
    search: PropTypes.bool,
    sideMenu: PropTypes.number,
    navSidebarPosition: PropTypes.string
}

export default NavBar;