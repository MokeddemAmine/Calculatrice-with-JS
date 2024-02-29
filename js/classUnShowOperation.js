export default class UnShowOperation{
    constructor(fullCalc){
        fullCalc.forEach(calc => {
            calc.classList.toggle('invalid');
        })
    }
}