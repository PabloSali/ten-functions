"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// 1
function isTrue(inputtedVariable){
    return inputtedVariable === true;
}
//---------------------------------------------
// 2
function isFalse(inputtedVariable){
    return inputtedVariable === false;
}
//---------------------------------------------
// 3
function not(inputtedVariable){
    return inputtedVariable !== true;
}
//---------------------------------------------
// 4
function addOne(inputtedVariable){
    return inputtedVariable + 1;
}
//---------------------------------------------
// 5
function isEven(inputtedVariable){
return parseFloat(inputtedVariable) === (inputtedVariable % 2 === 0);
}
//---------------------------------------------
// 6
function isIdentical(x, y){
 return x === y;
}
//---------------------------------------------
// 7
function isEqual(x, y){
    return x == y;
}
//---------------------------------------------
// 8
function or(x, y){
    return x || y;
}
//---------------------------------------------
// 9
function and(x, y){
    return x && y;
}
//---------------------------------------------
// 10
function concat(x, y){
    return (x + y);
}