import UnShowOperation from "./classUnShowOperation.js";
export class Number{
    constructor(numberElement,monitorContent,allCalc,fullCalc,lastClick){
        this.numberElement = numberElement;
        this.monitorContent = monitorContent;
        this.allCalc = allCalc;
        this.fullCalc = fullCalc
        this.lastClick = lastClick;
        //this.startFunction();
    }
    startFunction = () => {
        if(this.fullCalc[0].className)
            this.changeMonitor()
        else
            this.addToMonitor();
        
    }
    changeMonitor = () => {
        new UnShowOperation(this.fullCalc);
        this.monitorContent.innerHTML = this.numberElement.dataset.number;
    }
    addToMonitor = () => {
        if(this.monitorContent.innerHTML === '0' || this.allCalc.indexOf(this.lastClick) !== -1)
                this.monitorContent.innerHTML = this.numberElement.dataset.number;
        else
            this.monitorContent.innerHTML += this.numberElement.dataset.number;
    }
}
