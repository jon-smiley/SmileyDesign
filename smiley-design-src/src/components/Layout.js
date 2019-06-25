import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styleSheet from '../style/layoutStyle.css';
import { filterClassNameFunction } from '../logic/index.js';
import _ from 'lodash';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleItem: new Array(),
            design: this.props.design,
            navValue: ['margin']
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
        var { children, design, footer, ...layoutProps } = this.props;
        let classFunctionClass = new filterClassNameFunction();
        let renderElementArray = classFunctionClass.renderStyleComponentTest(this.state.styleItem, this.state.navValue);
        let classStyleString = "";

        for(var classString in renderElementArray){
            classStyleString += this.findCssModules(renderElementArray[classString]) + ' ';
        }

        return (
            <Fragment>
                { (!footer) ?
                    <div className={classStyleString + styleSheet.layoutDefault}>
                            {children}
                    </div> 
                    :
                    <div>
                        <div className={styleSheet.footerBackgroundHeightDefault}>
                            <div className={classStyleString + styleSheet.footerDefault}>
                                <div className={styleSheet.footerContainer}>
                                    {children}
                                </div>
                            </div>
                        </div> 
                    </div>
                }
            </Fragment>
        )
    }
}

Layout.propTypes = {
    dynamic: PropTypes.string,
    design: PropTypes.object,
    displayMode: PropTypes.string,
    footer: PropTypes.bool
}

export default Layout;