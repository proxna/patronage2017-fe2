class CounterManager{
  constructor(currentCounterList){
    this.counterNumber=currentCounterList.length+1;
    this.counters=currentCounterList;
  }

  createDiv(){
    var div=document.createElement("div");
    div.id="score-"+this.counterNumber;
    var h1=document.createElement("h1");
    h1.innerHTML="Score "+this.counterNumber+": ";
    var counterSpan=document.createElement("span");
    counterSpan.className="counter";
    var form=document.createElement("form");
    var upButton=document.createElement("button");
    upButton.classList.add("up");
    upButton.innerHTML="Up";
    var downButton=document.createElement("button");
    downButton.classList.add("down");
    downButton.innerHTML="Down";
    var getButton=document.createElement("button");
    getButton.classList.add("get");
    getButton.innerHTML="Get";
    var newValueInput=document.createElement("input");
    newValueInput.classList.add("value");
    newValueInput.type="number";
    var setButton=document.createElement("button");
    setButton.classList.add("set");
    setButton.innerHTML="Set";
    var resetButton=document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.innerHTML="Reset";
    document.body.appendChild(div);
    div.appendChild(h1);
    h1.appendChild(counterSpan);
    div.appendChild(form);
    form.appendChild(upButton);
    form.appendChild(downButton);
    form.appendChild(getButton);
    form.appendChild(newValueInput);
    form.appendChild(setButton);
    form.appendChild(resetButton);
  }

  createCounter(format, initValue){
    this.createDiv();
    this.counters.push(new ScoreUI(document.getElementById("score-"+this.counterNumber), format, initValue));
    ++(this.counterNumber);
  }

  removeCounter(){
    if(this.counterNumber>1){
      this.counterNumber-=1;
      var el=document.getElementById("score-"+this.counterNumber);
      el.parentNode.removeChild(el);
      this.counters.pop();
    }
  }

}
