"use strict";

//JavaScript Fundamentals – Part 2

//LECTURE: Functions



//1. Write a function called 'describeCountry' which takes three parameters:'country', 'population' and 'capitalCity'. Based on this input, thefunction returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

//2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

// #1--->

function describeCountry(country, population, capitalCity) {


    const countryDescription = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return countryDescription;
}

//# 2--->
const country1 = describeCountry("Jamaica", "3 million", "Mobay")

const country2 = describeCountry("USA", "300 million", "Washington")

const country3 = describeCountry("China", "1 billion", "Hong Kong")

console.log(country1, country2, country3)

//LECTURE: Function Declarations vs. Expressions

//1. The world population is 7900 million people. Create a function declarationcalled 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

//3 Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

//4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

//Declaration--------------------------------------------------------------

// #1 and #3--->
// function percentageOfWorld2(population) {
//     return population / 7900 * 100
// }
// const jamaicaPercentage = percentageOfWorld2(3)

// const americaPercentage = percentageOfWorld2(300)

// const chinaPercentage = percentageOfWorld2(1000)

// console.log(jamaicaPercentage, americaPercentage, chinaPercentage)




// // //Expression-----------------------------------------------------

// #4--->

const percentageOfWorld1 = function (population) {
    return population / 7900 * 100
}
const percentage1 = percentageOfWorld1(3)

const percentage2 = percentageOfWorld1(300)

const percentage3 = percentageOfWorld1(1000)

console.log(percentage1, percentage2, percentage3)











