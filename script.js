var price = 500;

var option1 = document.getElementById("education"); 
var option2 = document.getElementById("networth");

var option31 = document.getElementById("skill1"); 
var option32 = document.getElementById("skill2"); 
var option33 = document.getElementById("skill3"); 
var option34 = document.getElementById("skill4"); 

var option41 = document.getElementById("age1");
var option42 = document.getElementById("age2");
var option43 = document.getElementById("age3");

var option51 = document.getElementById("reputation1"); 
var option52 = document.getElementById("reputation2"); 
var option53 = document.getElementById("reputation3"); 

var button = document.getElementById("submit");

button.addEventListener("click", calculate);

function calculate1() {
    if (education.getAttribute("value") == "undergraduate")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.5; // turns strings into numbers and implies addition
    }
    
    else if (education.getAttribute("value") == "college")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.2; // turns strings into numbers and implies addition
    }

    else if (education.getAttribute("value") == "high_school")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.05; // turns strings into numbers and implies addition
    }

    else if (education.getAttribute("value") == "middle_school")   //retrieves a drop down list option attribute and compares it
    {
        price *= 0.9; // turns strings into numbers and implies addition
    }
}

function calculate2() {
    if (networth.getAttribute("value") == "upper_class")   //retrieves a drop down list option attribute and compares it
    {
        price *= 2; // turns strings into numbers and implies addition
    }
    
    else if (networth.getAttribute("value") == "middle_class")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.5; // turns strings into numbers and implies addition
    }

    else if (networth.getAttribute("value") == "lower_class")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.2; // turns strings into numbers and implies addition
    }
}

function calculate3() {

    if (option31.checked) {
        price += 100;
    }

    if (option32.checked) {
        price += 200;
    }

    if (option33.checked) {
        price += 150;
    }

    if (option34.checked) {
        price += 100;
    }
}

function calculate4() {
    if (age1.getAttribute("value") == "young")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.5; // turns strings into numbers and implies addition
    }
    
    else if (age2.getAttribute("value") == "middle-aged")   //retrieves a drop down list option attribute and compares it
    {
        price *= 1.2; // turns strings into numbers and implies addition
    }

    else if (age3.getAttribute("value") == "old")   //retrieves a drop down list option attribute and compares it
    {
        price *= 0.95; // turns strings into numbers and implies addition
    }
}

function calculate5() {
if (option51.checked) {
    price *= 0.85;
  } 
if (option52.checked) {
    price *= 0.9;
  } 
if (option53.checked) {
    price -= 200;
  }
}

function calculate() {
    calculate1();
    calculate2();
    calculate3();
    calculate4();
    calculate5();
    document.getElementById("price").innerHTML = "Price for kalyn mal is " +  price
    price = 500
}