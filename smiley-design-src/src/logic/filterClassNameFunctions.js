import _ from 'lodash';
let filterClassNameFunction = class {
     renderStyleComponentTest = (style, buttonValue) => {
        let styleObjectWithCorrectElements  = _.mapValues(buttonValue, function(styleKey){
        let combinedStyleClass = ""
        let filteredStyleElement = _.find(style, styleKey);
        let newElement = _.mapValues(filteredStyleElement, function(elementValue, key){
            return (styleKey === key ? elementValue : undefined);
            });
            for(var element in newElement){
            (newElement[element] ? combinedStyleClass += newElement[element] : undefined);
            }
            return combinedStyleClass;
        }); 
        let newCombinedComponent = [];
        for(var styleName in styleObjectWithCorrectElements){
            (styleObjectWithCorrectElements[styleName] ? newCombinedComponent.push(styleObjectWithCorrectElements[styleName]) : undefined);
        }
        return newCombinedComponent;
    }
}

export default filterClassNameFunction;



