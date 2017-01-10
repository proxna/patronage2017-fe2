class ScoreUI{
  constructor(element, format, initValue){
    this.counterElement=element.getElementsByClassName("counter")[0];
    this.scoreCounter=new ScoreCounter(this.counterElement, format, initValue);
    this.upButton=element.getElementsByClassName("up")[0];
    this.downButton=element.getElementsByClassName("down")[0];
    this.getButton=element.getElementsByClassName("get")[0];
    this.newValueInput=element.getElementsByClassName("value")[0];
    this.setButton=element.getElementsByClassName("set")[0];
    this.resetButton=element.getElementsByClassName("reset")[0];
    this.initEvents();
  }

  initEvents(){
    var self=this;
    this.upButton.addEventListener("click", evt => {
      self.scoreCounter.up();
    });
    this.downButton.addEventListener("click", evt => {
      self.scoreCounter.down();
    });
    this.getButton.addEventListener("click", evt => {
      alert(self.scoreCounter.value());
    });
    this.setButton.addEventListener("click", evt => {
      if(this.newValueInput.value!=""){
        self.scoreCounter.value(this.newValueInput.value);
      }
    });
    this.resetButton.addEventListener("click", evt => {
      self.scoreCounter.reset();
    });
  }
}
