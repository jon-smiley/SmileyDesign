import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styleSheet from '../style/panelStyle.css';
import { filterClassNameFunction } from '../logic/index.js';
import _ from 'lodash';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleItem: new Array(),
            design: this.props.design,
            panelValue: ['color', 'width', 'height', 'shadow', 'border', 'padding', 'margin', 'background']
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
        const { children, design, ...panelProps } = this.props;
        let classFunctionClass = new filterClassNameFunction();
        let renderElementArray = classFunctionClass.renderStyleComponentTest(this.state.styleItem, this.state.panelValue);
        let classStyleString = "";
        for(var classString in renderElementArray){
            classStyleString += this.findCssModules(renderElementArray[classString]) + ' ';
        }
        
        return (
            <Fragment>
                <div className={classStyleString + styleSheet.panelDefault}>
                    {children}
                </div>
            </Fragment>
        )
    }
}

Panel.propTypes = {
    dynamic : PropTypes.string,
    design: PropTypes.object
}

export default Panel;