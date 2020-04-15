/*
    Tucker Kent
    converterhelper.js
    19SP_INFO_2134_WW Online - JavaScript II
    Thoendel
    15 April 2020
*/

class Converter {
    //this is the base unit we want to convert to something else
    constructor(unitToConvert) {
        //we'll store this unit internally as _unitToConvert
        let check = parseFloat(unitToConvert);
        if(isNaN(check)) {
            throw new Error("Error: you must pass a number to constructor!");
        } else {
            this._unitToConvert = check;
        }
        
    }
}

//define a class named MetricToImperial here, which extends the Converter class shown above.

class MetricToImperial extends Converter { //creating class that extends Converter class
    constructor(value) { //the class constructor takes a single parameter
        super(value); //calling the constructor of the super class with the same value parameter
    }

    convertMetersToFeet() { //method to convert meters to feet
        return this._unitToConvert * 3.2808; //returning calculated result 
    }

    convertMetersToMiles() { //method to convert meters to miles
        return this._unitToConvert * 0.00062137; //returning calculated result 
    }

    convertLitersToGallons() { //method to convert liters to gallons
        return this._unitToConvert * 0.26417; //returning calculated result 
    }

    convertLitersToQuarts() { //method to convert liters to quarts
        return this._unitToConvert * 1.056688; //returning calculated result 
    }

    convertKilosToPounds() { //method to convert kilos to pounds
        return this._unitToConvert * 2.2046; //returning calculated result 
    }

    convertCelsiusToFahrenheit() { //method to convert celsius to fahrenheit
        return this._unitToConvert * 1.8 + 32; //returning calculated result 
    }

    static toTwoDecimalPlaces(number) { //static method to round to only 2 decimal points if the return value is a float 
        let floatExp = /[\.][\d]/; //regExp to check if the value is indeed a float
        try{ //try block to test the provided parameter and throw error if need be 
            if(floatExp.test(number) === false){ //testing expression pattern -- if false
                throw new Error("Number did not contain decimal point"); //throwing error if the number did not contain decimal point
            } else { //if number contains decimal point
                return number.toFixed(2); //returning the number with only 2 digits after decimal
            }
        } catch (e){ //if error is thrown we are catching it here
            console.log(e.toString()); //logging error to console
            return number; //returning non float number
        }
    }
}

