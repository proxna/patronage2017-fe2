class ScoreCounter{
  constructor(element, format, initValue){
    this.element=element;
    this.format=format;
    this.counterValue=Number.parseInt(initValue);//prevent adding values like strings
    this.printValue();
  }

  printValue(){
    var valueToStr = this.counterValue+"";
    while(valueToStr.length < this.format){
        valueToStr='0'+valueToStr;
    }
    this.element.innerHTML=valueToStr;
  }

  up(){
    if(this.counterValue<Math.pow(10, this.format)-1){
      this.counterValue+=1;
      this.printValue();
    }
    else{
      alert("number out of range");
    }
  }

  down(){
    if(this.counterValue>0){
      this.counterValue-=1;
      this.printValue();
    }
    else{
      alert("number out of range");
    }
  }

  value(newValue){
    if(newValue===undefined){
      return this.counterValue;
    }
    else if(newValue>=0 && newValue<=Math.pow(10, this.format)-1){
      this.counterValue=Number.parseInt(newValue);
      this.printValue();
    }
    else{
      alert("number out of range");
    }
  }

  reset(){
    this.counterValue=0;
    this.printValue();
  }
}
