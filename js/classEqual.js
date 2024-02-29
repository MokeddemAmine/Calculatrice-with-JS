export default class Equal {
    constructor(lastClick,monitorContent,monitorText,allCalc,numbersClick,sign,BaseCalc){
        this.lastClick = lastClick;
        this.monitorContent = monitorContent;
        this.monitorText = monitorText;
        this.allCalc = allCalc;
        this.numbersClick = numbersClick;
        this.sign = sign;
        this.BaseCalc = BaseCalc;
    }
    addTheEqualSign = () => {
        if(this.allCalc.indexOf(this.lastClick)!==-1){
            let array = this.monitorText.innerHTML.split('');
            array.pop();
            array.push(`=`);
            this.monitorText.innerHTML = array.join('');
        }
        else if(this.numbersClick.indexOf(this.lastClick)!==-1){
            this.monitorText.innerHTML +=` ${this.monitorContent.innerHTML} =`
        }
        else{
            this.monitorText.innerHTML +=` =`
        }
    }
    arrayFilter = (arrayResult) =>{
        return arrayResult.filter( e => {
            if(typeof e === 'string')
                return e.indexOf(this.sign)!==-1
        })
    }
    stringToNumber = (arrayResult) => {
        arrayResult.forEach( (e,index) => {
            if(typeof e !== 'number'){
                if(this.BaseCalc.indexOf(e)===-1){
                    arrayResult[index]=parseFloat(e);
                }
            }
        })
    }
    calculBasicOperation(arrayResult,sign1,sign2){
        arrayResult.forEach( (e,index) => {
            if(typeof e === 'string'){
                if(arrayResult[index]){
                    while(arrayResult[index] === sign1 || arrayResult[index] === sign2){
                        if(arrayResult[index] === '+')
                            arrayResult[index] = arrayResult[index-1]+arrayResult[index+1]
                        else if(arrayResult[index] === '-')
                            arrayResult[index] = arrayResult[index-1]-arrayResult[index+1]
                        else if(arrayResult[index] === '*')
                            arrayResult[index] = arrayResult[index-1]*arrayResult[index+1]
                        else
                            arrayResult[index] = arrayResult[index-1]/arrayResult[index+1]
                        
                        arrayResult.splice(index-1,1)
                        arrayResult.splice(index,1);
                    }
                }
            }
        })
    }
    squartsCalc(arrayResult,sqrts){
        sqrts.forEach( e => {
            let index = arrayResult.findIndex(item =>{
                if(typeof item === 'string')
                    return item.localeCompare(e)===0
            })
            e=e.replace('sqrt','');
            e=e.replace('(','');
            e=e.replace(')','');
            e=parseFloat(e);
            arrayResult[index]=Math.sqrt(e);
        })
    }
    powersCalc(arrayResult,pows){
        pows.forEach( e => {
            let index = arrayResult.findIndex(item =>{
                if(typeof item === 'string')
                    return item.localeCompare(e)===0
            })
            e=e.replace('sqr','');
            e=e.replace('(','');
            e=e.replace(')','');
            e=parseFloat(e);
            arrayResult[index]=Math.pow(e,2);
        })
    }
    reversesCalc(arrayResult,reverses){
        reverses.forEach( e => {
            let index = arrayResult.findIndex(item =>{
                if(typeof item === 'string')
                    return item.localeCompare(e)===0
            })
            e=e.replace('1/(','');
            e=e.replace(')','');
            e=parseFloat(e);
            arrayResult[index]=1/e;
        })
    }
}