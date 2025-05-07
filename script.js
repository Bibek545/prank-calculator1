const allButtonsEl = document.querySelectorAll(".btn");
let strToDisplay = "";
const displayElm = document.querySelector(".display")

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
    return displayTotal();

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
    const total = eval(strToDisplay)
   strToDisplay = total;
    display(strToDisplay);
    
};