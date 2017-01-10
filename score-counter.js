const ANIMATION_CLASS_NAME="animatedCounter";
const OUT_OF_RANGE_COM="number out of range";

class ScoreCounter{
  constructor(element, format, initValue){
    var self=this;
    this.element=element;
    this.element.addEventListener("animationend", evt => {
      self.element.classList.remove(ANIMATION_CLASS_NAME);
    });
    this.format=format;
    this.maxValue=Math.pow(10, this.format)-1;
    this.counterValue=Number.parseInt(initValue);//prevent adding values like strings
    this.printValue();
  }

  resetAnimation(){
    this.element.classList.remove(ANIMATION_CLASS_NAME);
    this.element.offsetWidth;
    this.element.classList.add(ANIMATION_CLASS_NAME);
  }

  printValue(){
    this.resetAnimation();
    var valueToStr = this.counterValue+"";
    while(valueToStr.length < this.format){
        valueToStr='0'+valueToStr;
    }
    this.element.innerHTML=valueToStr;
  }

  up(){
    if(this.counterValue<this.maxValue){
      this.counterValue+=1;
      this.printValue();
    }
    else{
      alert(OUT_OF_RANGE_COM);
    }
  }

  down(){
    if(this.counterValue>0){
      this.counterValue-=1;
      this.printValue();
    }
    else{
      alert(OUT_OF_RANGE_COM);
    }
  }

  value(newValue){
    if(newValue===undefined){
      return this.counterValue;
    }
    else if(newValue>=0 && newValue<=this.maxValue){
      this.counterValue=Number.parseInt(newValue);//prevent adding values like strings
      this.printValue();
    }
    else{
      alert(OUT_OF_RANGE_COM);
    }
  }

  reset(){
    this.element.classList.remove(ANIMATION_CLASS_NAME);
    this.counterValue=0;
    this.printValue();
  }
}
