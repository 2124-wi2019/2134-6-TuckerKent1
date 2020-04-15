/*
    Tucker Kent
    script.js
    19SP_INFO_2134_WW Online - JavaScript II
    Thoendel
    15 April 2020 -- updated from 8 April 2020
*/

window.addEventListener("load", (event) => { //window event listener added upon load event

    const input = document.getElementById("userInput"); //set input element to constant variable s
    const convertLink = document.getElementById("action"); //set anchor element to constant variable 
    const errorHolder = document.getElementById("errorHolder"); //set div element to constant variable 
    const errorList = document.getElementById("errorList"); //set UL element to constant variable 
    const convertFromHolder = document.getElementById("convertFromHolder"); //set div element to constant variable 
    const convertToHolder = document.getElementById("convertToHolder"); //set div element to constant 
    const convertFrom = document.getElementById("convertFrom"); //set select element to constant variable
    const convertTo = document.getElementById("convertTo"); //set select element to constant variable 
    const resultsHolder = document.getElementById("resultHolder"); //set div element to constant variable 

    input.addEventListener("keyup", (e) => { //event listener added on keyup event to check input
        errorList.innerHTML = ""; //resetting errorList to blank to erase previous errors
        if(input.value === ""){ //if input is blank
            displayError("You must enter a unit to convert"); //calling method to add an error message to the errorlist and make the errorHolder div visible
            input.focus(); //setting focus to the input field
        }
        if(isNaN(input.value)){
            displayError("You must enter a whole number to convert"); //calling method to add an error message to the errorlist and make the errorHolder div visible
            input.focus(); //setting focus to the input field
        }
        if(input.value !== "" && !isNaN(input.value)){ //if input is not empty and contains a number value
            convertFromHolder.setAttribute("class", "visible"); //setting the convertFromHolder div to visible
        }
    });

    convertFrom.addEventListener("change", (e) => { //event listener added for change event of the convert from selection field
        convertToHolder.setAttribute("class", "hidden"); //setting the div to hidden
        convertTo.innerHTML = ""; //resetting the innerHTML of the selection options to keep from repeating
        let conversion; //created variable that the MetricToImperial object will be stored in
        switch(convertFrom.value){ //switch statement based on value chosen in the convertFrom select box
            case "Meters": //if meters is chosen
                    createSelectOption("feet", "Feet"); //creating select option for feet 
                    createSelectOption("miles", "Miles"); //creating select option for miles 
                    convertToHolder.setAttribute("class", "visible"); //setting the div back to visible
                    convertLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        switch(convertTo.value){ //switch statement to check convertTo value
                            case "Feet": //if the value is Feet
                                conversion = new MetricToImperial(input.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertMetersToFeet()) + " Feet"; //displaying the calculation with format -- calling static method and conversion method
                                break; //breaking out of this switch statement
                            case "Miles": //if value is Miles
                                conversion = new MetricToImperial(input.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertMetersToMiles()) + " Miles"; //displaying the calculation with format -- calling static method and conversion method
                                break; //breaking out of this switch statement
                        }
                    });
                    break; //break out of switch
            case "Liters": //if value is Liters
                    createSelectOption("gallons", "Gallons"); //creating select option for gallons
                    createSelectOption("quarts", "Quarts"); //creating select option for quarts
                    convertToHolder.setAttribute("class", "visible");  //setting the div back to visible
                    convertLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        switch(convertTo.value){ //switch statement to check convertTo value
                            case "Gallons": //if value is Gallons
                                conversion = new MetricToImperial(input.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertLitersToGallons()) + " Gallons"; //displaying the calculation with format -- calling static method and conversion method
                                break; //breaking out of switch statement
                            case "Quarts": //if value is Quarts
                                conversion = new MetricToImperial(input.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertLitersToQuarts()) + " Quarts"; //displaying the calculation with format -- calling static method and conversion method
                                break; //breaking out of this switch statement
                        }
                    });
                    break; //break out of switch
            case "Kilos": //if value is Kilos
                    createSelectOption("pounds", "Pounds"); //creating select option for pounds
                    convertToHolder.setAttribute("class", "visible"); //setting the div back to visible
                    convertLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        conversion = new MetricToImperial(input.value); //creating new MetricToImperial instance
                        resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertKilosToPounds()) + " Pounds"; //displaying the calculation with format -- calling static method and conversion method
                    });
                    break; //break out of switch
            case "Celsius": //if value is Celsius
                    createSelectOption("fahrenheit", "Fahrenheit"); //creating select option for fahrenheit
                    convertToHolder.setAttribute("class", "visible"); //setting the div back to visible
                    convertLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        conversion = new MetricToImperial(input.value); //creating new MetricToImperial instance
                        resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertCelsiusToFahrenheit()) + " Degrees Fahrenheit"; //displaying the calculation
                    });
                    break; //break out of switch
        }   
    });


    function displayError(errorMessage){ //function to create and append error messages
        let errorString = ""; //creating errorString variable
        errorString += errorMessage; //appending error message to errorString
        let errorLi = document.createElement("li"); //creating li element
        errorLi.innerHTML = errorString; //adding error message to the li
        errorList.appendChild(errorLi); // appending li to the ul
        errorHolder.setAttribute("class", "visible"); //setting the error holder class to visible
    }

    function createSelectOption(idValue, selectValue){ //function to create a select option -- to help keep clutter out of switch 
        let element = document.createElement("option"); //creating option element in element variable
        element.setAttribute("id", idValue); //setting id of the element
        element.innerHTML = selectValue; //setting innerhtml of the option element
        convertTo.appendChild(element); //appending the option element to the convert to select field
    }


});