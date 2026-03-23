//exemple
// import{sum,multi}from './advance-js-module-export.js';

// console.log(sum(3,4));
// console.log(multi(5,6));

import * as utils from "./advance-js-module-export.js";
// import _ from 'lodash';

console.log(utils.sum(3,4));
console.log(utils.multi(5,6));

//exemple 2
let arr1=[{name:'moshe',id:"o85u23489"},
    {name:'yair',id:"lkdrgersl"},
    {name:'michal',id:",nfvdsjkn"}];
// let arr2=_.cloneDeep(arr1);
// arr2[0].name='moshik';
// console.log(arr1[0])
// console.log(arr2[0])

//exemple 3
console.log(utils.getSpecialNumber());

//exemple 4
import './advance-js-module-run.js';
