import UnShowOperation from "./classUnShowOperation.js";
export default class Calc{
    constructor(calcElement,monitorContent,monitorText,lastClick,sign,allCalc,fullCalc){
        this.calcElement = calcElement;
        this.monitorContent = monitorContent;
        this.monitorText = monitorText;
        this.lastClick = lastClick;
        this.sign = sign;
        this.allCalc = allCalc;
        this.fullCalc = fullCalc;
    }
    reverse = () => {
        if(this.calcElement.className!=='invalid'){
            if(this.monitorContent.innerHTML === '0'){
                this.monitorContent.innerHTML = `Cannot devide by zero`;
                new UnShowOperation(this.fullCalc);
            }
            else{
                if(this.monitorText.innerHTML.localeCompare('')){
                    console.log(this.lastClick);
                    if(this.lastClick === 'equal'){
                        this.monitorText.innerHTML = `1/(${this.monitorContent.innerHTML})`;
                    }
                    else
                        this.monitorText.innerHTML += ` 1/(${this.monitorContent.textContent})`;
                }
                else{
                    this.monitorText.innerHTML = `1/(${this.monitorContent.textContent})`;
                }
            }
        }
    }
    power = () => {
        if(this.calcElement.className!=='invalid'){
            if(this.monitorText.innerHTML.localeCompare('')){
                if(this.lastClick === 'equal')
                    this.monitorText.innerHTML = `sqr(${this.monitorContent.textContent})`;
                else
                    this.monitorText.innerHTML += ` sqr(${this.monitorContent.textContent})`;
            }
                
            else
                this.monitorText.innerHTML = `sqr(${this.monitorContent.textContent})`;
        }
    }
    square = () => {
        if(!this.calcElement.className){
            if(parseFloat(this.monitorContent.innerHTML) < 0){
                this.monitorContent.innerHTML =`Invalid input`;
                unShowOperation();
            }
            else{
                if(this.monitorText.innerHTML.localeCompare('')){
                    if(this.lastClick === 'equal')
                        this.monitorText.innerHTML = `sqrt(${this.monitorContent.textContent})`;
                    else
                        this.monitorText.innerHTML += ` sqrt(${this.monitorContent.textContent})`;
                }
                    
                else
                this.monitorText.innerHTML = `sqrt(${this.monitorContent.textContent})`;
            }
            }
    }
    basicCalc = () => {
        if(this.monitorText.innerHTML.localeCompare('')){
            if(this.allCalc.indexOf(this.lastClick)!==-1){
                let array = this.monitorText.innerHTML.split('');
                array.pop();
                array.push(`${this.sign}`);
                this.monitorText.innerHTML = array.join('');
            }
            else{
                console.log(this.lastClick);
                if(this.monitorText.innerHTML.slice(-1)===')')
                    this.monitorText.innerHTML +=` ${this.sign}`;
                else if (this.lastClick === 'equal'){
                    this.monitorText.innerHTML = `${this.monitorContent.innerHTML} ${this.sign}`
                }
                else
                    this.monitorText.innerHTML += ` ${this.monitorContent.innerHTML} ${this.sign}`;
            }  
        }
        else{
            this.monitorText.innerHTML = `${this.monitorContent.innerHTML} ${this.sign}`
        }
    }
}