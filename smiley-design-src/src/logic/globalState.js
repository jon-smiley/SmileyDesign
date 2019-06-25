import _ from 'lodash';
import { globalValues } from './index.js';

let globalState = class {
    setGlobalStates = (globalKey, globalValue) => {
        globalValues[globalKey] = globalValue;
    }
}

export default globalState;
