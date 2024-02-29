import UnShowOperation from "./classUnShowOperation.js";
export default class Clear{
    constructor(monitorContent,monitorText,fullCalc){
        this.monitorContent = monitorContent;
        this.monitorText = monitorText;
        this.fullCalc = fullCalc
    }
    clear = ( ) =>{
        this.monitorContent.innerHTML = '0';
        this.monitorText.innerHTML = '';
    }
    clearFunction = () => {
        this.monitorContent.innerHTML = '0';
        this.monitorText.innerHTML = '';
        if(this.fullCalc[0].className)
            new UnShowOperation(this.fullCalc);
    }
    ceFunction = () => {
        this.monitorContent.innerHTML = '0';
        if(this.fullCalc[0].className){
            new UnShowOperation(this.fullCalc)
            this.monitorText.innerHTML = '';
        }
    }
    equalClear = () => {
        new UnShowOperation(this.fullCalc);
        this.monitorContent.innerHTML = '0';
        this.monitorText.innerHTML = '';
    }
}