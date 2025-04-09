const display = document.getElementById("main-display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const backspace = document.getElementById("backspace");

const erase = document.getElementById("erase");
const divide = document.getElementById("divide");
const times = document.getElementById("times");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");

let displayText=[];
function putValInDisplay(e) {
  if (display.textContent === "0") {
    display.textContent = "";
  }

  display.textContent += e.toString();
  displayText.push(e);
}

dot.onclick = () =>{
    putValInDisplay(".");
};
one.onclick = () => {
    putValInDisplay(1);
};
two.onclick = () => {
    putValInDisplay(2);
};
three.onclick = () => {
    putValInDisplay(3);
};
four.onclick = () => {
    putValInDisplay(4);
};
five.onclick = () => {
    putValInDisplay(5);
};
six.onclick = () => {
    putValInDisplay(6);
};
seven.onclick = () => {
    putValInDisplay(7);
};
eight.onclick = () => {
    putValInDisplay(8);
};
nine.onclick = () => {
    putValInDisplay(9);
};
zero.onclick = () => {
  putValInDisplay(0);
};


  erase.onclick = () => {
    display.textContent="0";
  };
  divide.onclick = () => {
    putValInDisplay("/");
  };
  times.onclick = () => {
    putValInDisplay("*");
  };
  minus.onclick = () => {
    putValInDisplay("-");
  };
  plus.onclick = () => {
    putValInDisplay("+");
  };

  
  equal.onclick = () => {
    let input = display.textContent;
  
    // Split
    let tokens = input.match(/(\d+(\.\d+)?|[+\-*/])/g);
  
    if (!tokens) return;
  
    // Convert to numbers
    for (let i = 0; i < tokens.length; i++) {
      if (!isNaN(tokens[i])) {
        tokens[i] = parseFloat(tokens[i]);
      }
    }
  
  
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '*' || tokens[i] === '/') {
        let left = tokens[i - 1];
        let right = tokens[i + 1];
        let result = tokens[i] === '*' ? left * right : left / right;
        tokens.splice(i - 1, 3, result);
        i--; 
      }
    }
  
  
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '+' || tokens[i] === '-') {
        let left = tokens[i - 1];
        let right = tokens[i + 1];
        let result = tokens[i] === '+' ? left + right : left - right;
        tokens.splice(i - 1, 3, result);
        i--;
      }
    }
  
   
    display.textContent = tokens[0];
    displayText = [tokens[0].toString()];
  };
  

backspace.onclick = () => {
  display.textContent = display.textContent.slice(0, -1);
};
