import {Number} from './classNumber.js';
import Clear from './classClear.js';
import Calc from './classCalc.js';
import Equal from './classEqual.js';
// Start Variables :
// numbers :
const numbers = document.querySelectorAll('.number');
// calcul :
const percent = document.getElementById('percent');
const CE = document.getElementById('ce');
const C = document.getElementById('clear');
const returnBtn = document.getElementById('return');
const reverse = document.getElementById('reverse');
const power = document.getElementById('power');
const square = document.getElementById('square');
const divise = document.getElementById('divise');
const multiple = document.getElementById('multiple');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const plusMinus = document.getElementById('plus-minus');
const comma = document.getElementById('comma');
const equal = document.getElementById('equal');

const monitorText = document.querySelector('.monitor-content-text');
const monitorContent = document.querySelector('.monitor-content-result'); 

// arrays
var allCalc = ['plus','minus','multiple','divise'];
var fullCalc = [reverse,power,square,plus,minus,multiple,divise,comma,plusMinus,percent];
var BaseCalc = ['+','-','/','*'];
var numbersClick = ['zero','one','two','three','four','five','six','seven','eight','nine','plus-minus'];
var lastClick;

// End Variables
// click number on the monitor


numbers.forEach(number => {
    number.addEventListener('click', e =>{
        new Number(e.target,monitorContent,allCalc,fullCalc,lastClick).startFunction();
    })  
})
// clear the monitor 
let clear = new Clear(monitorContent,monitorText,fullCalc);

C.addEventListener('click', e => {
    clear.clearFunction();
})
CE.addEventListener('click', e => {
    clear.ceFunction();
})
// change number plus or minus
plusMinus.addEventListener('click',e =>{
    if(!e.target.className){
    if(monitorContent.innerHTML.indexOf('-')===-1 && monitorContent.innerHTML !== '0')
        monitorContent.innerHTML = '-'+monitorContent.innerHTML;
    else{
        monitorContent.innerHTML = monitorContent.innerHTML.replace('-','');
    }
    }
})
// click comma button
comma.addEventListener('click',e => {
    if(!e.target.className){
    if(monitorContent.innerHTML === '0' || monitorContent.innerHTML.indexOf('.')=== -1)
        monitorContent.innerHTML += '.';
    }
})

// al3amalyat
// reverse calc
var calc = new Calc(null,monitorContent,monitorText,lastClick,null,allCalc,fullCalc);
reverse.addEventListener('click', e => {
    calc.calcElement = e.target;
    calc.reverse();
})
// power calc
power.addEventListener('click', e => {
    calc.calcElement = e.target;
    calc.power();
})
// square calc
square.addEventListener('click', e => {
    calc.calcElement = e.target;
    calc.square();
})

// basic calc + - * / :
plus.addEventListener('click', e=>{
    if(e.target.className!=='invalid'){
        calc.calcElement = e.target;
        calc.sign = '+';
        calc.basicCalc();   
    }
})
minus.addEventListener('click', e => {
    if(e.target.className!=='invalid'){
        calc.calcElement = e.target;
        calc.sign = '-';
        calc.basicCalc();
    }
})
multiple.addEventListener('click', e => {
    if(e.target.className!=='invalid'){
        calc.calcElement = e.target;
        calc.sign = '*';
        calc.basicCalc();
    }
})
divise.addEventListener('click', e => {
    if(e.target.className!=='invalid'){
        calc.calcElement = e.target;
        calc.sign = '/';
        calc.basicCalc();
    }
})
// Show the result:
var equalObj;
equal.addEventListener('click', e => {
    equalObj = new Equal(lastClick,monitorContent,monitorText,allCalc,numbersClick,null,BaseCalc)

    if(reverse.className){
        clear.equalClear()
    }
    else{
        if(lastClick==='equal'){
            clear.id = e.target.id;
            clear.clear();
        }
        else{
            if(monitorText.innerHTML.localeCompare('')){
                
                equalObj.addTheEqualSign();
                // create array list content all numbers calculate:
                let arrayResult = monitorText.innerHTML.split(' ');
                // delete the equal sign from the arrayResult
                arrayResult.pop();
                //filter an array content the full sqrt
                equalObj.sign = 'sqrt';
                let sqrts = equalObj.arrayFilter(arrayResult);
                // calculate of the sqrts
                equalObj.squartsCalc(arrayResult,sqrts);
                // filter an array content the full power
                equalObj.sign = 'sqr';
                let pows = equalObj.arrayFilter(arrayResult,equalObj.sign);
                // calculte of the powers
                equalObj.powersCalc(arrayResult,pows);
                // filter an array content the full reverse
                equalObj.sign = '/(';
                let reverses = equalObj.arrayFilter(arrayResult,equalObj.sign);
                // calculate the reverses
                equalObj.reversesCalc(arrayResult,reverses);
                // exchange all string number into the array to number
                equalObj.stringToNumber(arrayResult);
                // calculate the Basic Operation * / + -
                equalObj.calculBasicOperation(arrayResult,'*','/');
                equalObj.calculBasicOperation(arrayResult,'+','-');
                
                
                // show the result in the monitor 
                monitorContent.innerHTML = `${arrayResult.join('')}`
                
            }
            else{
                monitorText.innerHTML = `${monitorContent.innerHTML}=`
            }
        }
    }
})
// return button
returnBtn.addEventListener('click', e => {
    if(numbersClick.indexOf(lastClick)!==-1 || lastClick ==='comma' || lastClick === 'return'){
        if(monitorContent.innerHTML.length === 1){
            monitorContent.innerHTML = '0';
        }
        else{
            let array = monitorContent.innerHTML.split('')
            array.pop()
            monitorContent.innerHTML = array.join('');
        }  
    }
})
// assignment the lastClick 
document.addEventListener('click', e => {
    lastClick = e.target.id;
    calc.lastClick = lastClick;
    if(equalObj)
        equalObj.lastClick = lastClick;
})
// minimize the calculator 
document.body.addEventListener('click', e => {
    if(e.target.className==='minimize'){
        document.body.classList.toggle('minimize-body');
    }
    else{
        if(document.body.className==='minimize-body')
        document.body.classList.toggle('minimize-body');
    }
})
// show the setting menu 
const menuBtn = document.querySelector('.menu-button');
const menuSetting = document.querySelector('.setting');
menuBtn.addEventListener('click', e => {
    menuSetting.classList.toggle('setting-scale');
})