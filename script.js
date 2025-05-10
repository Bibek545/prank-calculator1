const allButtonsEl = document.querySelectorAll(".btn");
let strToDisplay = "";
const displayElm = document.querySelector(".display")



const operators = ["%","/","*","-","+"];

let lastOperator = " ";
const buttonAdtion = (value)=> {
 console.log(value);

 if(value === 'AC') {
    strToDisplay = "";
    return display(strToDisplay);
 }

 if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
 }
 
 if(value === "=") {
    lastOperator = "";
    const lastChar = strToDisplay[strToDisplay.length - 1];

    // check i fthe last character is operator and ignore
    if(operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);

    }
    return displayTotal();

 }


//  show only last clicked charcter

if(operators.includes(value)) {
    lastOperator = value;
    const lastChar = strToDisplay[strToDisplay.length - 1];

    if(operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);

    }

}
// handling the dot click 
if (value === ".") {
    const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = strToDisplay.slice(lastOperatorIndex);
    console.log(lastNumberSet);

    if(lastNumberSet.includes(".")) {
        return;
    }
    
    if(!lastOperator && strToDisplay.includes(".")) {
        return;
    }
}

 strToDisplay += value;
 display(strToDisplay);
};
// attached click event to all the buttons
allButtonsEl.forEach((btn)=> {
    btn.addEventListener("click",()=> {
      const value = btn.innerText;
      buttonAdtion(value);
    }); 
   
});

// updated the click button value to display area
const display = (str) => {
    displayElm.innerText = str || "0.0" ;

}

// calculate the total value
const displayTotal = () => {

    const extraValue = randomValue();
    const total = eval(strToDisplay)
   strToDisplay = total;
    display(strToDisplay);
    
};


// 
const randomValue = () => {
    const num = Math.round(Math.random() * 10); // will generate 0 - 10 
    return num < 8 ? num : 0;
}