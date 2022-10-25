// "use strict"

const x = 1000000;

console.log(x)

// console.log("Polygon");

// // 1. Comment
// // This is my first javascript function single line comment
// //          ctrl + /

// /* Multi comment
// Multi comment
// Multi comment
// Multi comment */

// // this is my first variable
// // let a = 3;

// // 2. Data Types and Variables

// // undefined

// // console.log('Web3ladies', b)

// // null
// let pocket = null;
// console.log("Web3ladies", pocket);

// // Boolean
// // true or false
// let color = true;

// // String
// let name = "Malik Mukhtar";
// console.log("Web3ladies",  name);

// // Symbol
// // let sym = new Symbol()

// // Number
// let age = 1100
// console.log("Web3ladies",  age);

// // Object {}
// // key: value
// // crayon: green

// {}
// let person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//      eyeColor:"blue",
//      color: true,
//      longhair: false,
//      state: null,
//      gender: undefined,
//     };

// console.log("this is person property", person.age);

//     // Ways to declare Variables
//     // var, let , const

//     var name1 = 'Malik'

//     let name2 = 'Mukhtar'

//     const name3 = 'school'

//     const vat = 7.5

//     name2 = "Jane";

//     console.log("this is vat property", name2);

//     //Variable naming conventions

//     // camelCase
//     let samSungGoesToSchool = 30;

//     // PascalCase
//     let MalikNamingConvention = 'School';

//     // snake_case
//     let malik_naming_convention = 'NamingConvention';

//     // kebab case
//     // let kebab-naming-convention = 'NamingConvention';

//     // Arithmetics in JS
//     // addition  + , multiplication *, division /, subtraction -, reminder % (modulus)

//     // addition

//     let a = 1000;

//     let b = 3000;

//     let c = a + b;

//     console.log("Answer to first c", c + 20);

//     //multiplication
//     let d = a * b;
//     console.log("Answer", d);

//     //division
//     let e = a / b;
//     console.log("Answer", e);

//     //subtraction
//     let f = b - a
//     console.log("Answer", f);

// //reminder

// let malikNumber = 9;

// console.log("Answer to reminder", 25647732 % 356);

// // I generated a random number between 0 and 1   Math.random()

// //Multiplied it m=by this large number 10000000000000 times

// // then find d reminder with %

// let Web3ladies = Math.floor(Math.random() * 10000000000000);
//     console.log("Web3ladies", Web3ladies % 28)

//     // concatenation

//     let variableOne = 'Malik'

//     let variableTwo = 'Web3Ladies'

//     let country = 'Nigeria';

//     let finalResult = variableOne + ' is a student ' + variableTwo + ' Academy ' + country

//     console.log('Final Result', finalResult)

// let a = 100

// let b = 5

// console.log('final result', a + b)

//Type Coercion

// Array (how to declare an array)

// let firstArray = ['Malik', 16473, 'Color', true, {color:'red'}, null, undefined, 'Color', true, {color:'red'}, null, undefined]
//         0       1       2       3       4           5       6         7       8       9           10      11

//   console.log('My first array', firstArray.length)

// let c = 2;

// let d = "588490388477588499983838"

// let name (string) = "malik"

// name = 3;

// console.log('Answer', c + d.toString())

let b = true; // 0

let a = undefined; // 1

// console.log("Our ans", b + a);

// NaN Not a Number

// let firstArray = ['Malik', 16473, 'Color', true, {color:'red'}, null, undefined, 'Color', true, {color:'red'}, null, undefined]

// let nestedArr = [
//   "John",
//   "Doe",
//   "67",
//   ["HTML", "JS", "CSS", [1, 2, 3, "Chioma"]],
// ];

/// console.log("My anssssss", firstArray[4]);
// console.log("My second anssssssss", nestedArr[3][3][3]);

// //Array Methods

// //Push

// let resultArray = [];

// console.log("Our Assignment Result", resultArray);

// resultArray.push(7);
// resultArray.push(8);
// resultArray.push(2);
// resultArray.push(10);
// resultArray.push(true);
// resultArray.push(undefined);
// resultArray.push(null);
// resultArray.push("malik");
// resultArray.push({
//   color: "green",
// });
// resultArray.push("Web3Ladies");

// console.log("Our Assignment Result Final", resultArray);

// //Pop
// resultArray.pop(); //web3ladies
// resultArray.pop(); //color:green
// resultArray.pop(); //malik
// resultArray.pop(); //null
// resultArray.pop(); //undefined

// console.log("Our Assignment Result Final after removing", resultArray);

// resultArray.shift();
// resultArray.shift();

// console.log("Our Assignment Result Final after Shifting", resultArray); 

// resultArray.unshift("International");
// resultArray.unshift("Sport");
// resultArray.unshift("Web3Ladies");

// console.log("Our Assignment Result Final after UnShifting", resultArray);

// let firstArray = [
//   "Malik",
//   16473,
//   "Color",
//   true,
//   { color: "red" },
//   null,
//   undefined,
//   "lizzy",
// ];

//Normal
//  function myFunction(){
//   console.log(' 1 Malik')
//   let result = 100
//   console.log('calculation myfuction result', result)
//   return result
// }

// myFunction()
//  let testing = myFunction()

// console.log('function result', testing)
// myFunction()

// arrow function
// const mySecondFunction = () => {
// console.log(' 2 Mukhtar')//
// myFunction()//
// }

// mySecondFunction()

// function myThirdFunction(){
//   console.log('Web 3 Ladies')
// }

// const mySeconddetails = (age, height, weight) => {
//   return {
//     age,height,weight
//   }
// }



//Parameters
// const registerExam = (name, school, subject1, subject2, department ) => {
//   console.log(name + " " + school + " " + subject1 + " " + subject2 )

//  const ourResultFromAbove = mySeconddetails(22, 140, 300)
// const  { age, height, weight} = ourResultFromAbove; //Destructuring
 
// let hall1 = []
// let hall2 = []
// let hall3 = []


// if(department === 'Science' && name === 'Victoria'){
//   console.log('Hall 1' + name)
//   hall1 = hall1.push(name)
// } else if(department === 'Science' && name === 'Debby'){
//   console.log('Hall 2' + name)
//   hall2 = hall2.push(name)
// }
// }

//You call the function with argument/s
// registerExam('Victoria', 'Federal Secondary School', 'English', 'Maths', 'Science')
// registerExam('Debby', 'Air Force Military School', 'Economics', 'Geography', 'Science')
// registerExam('Malik', 'Air Force Military School', 'Economics', 'Geography', 'Art')
// registerExam('Roja', 'Air Force Military School', 'Economics', 'Geography', 'Art')
// registerExam('Abimbola', 'Air Force Military School', 'Economics', 'Geography', 'Commercial')
// registerExam('Lizzy', 'Air Force Military School', 'Economics', 'Geography', 'Commercial')
// registerExam(1, undefined, null, [1, 2 ,'web3ladies', true])

//Global Scope

// const vat = 7.5 // outside a function

// let empty = 0

// const abuja = (name) => {
//   const localTaxAbuja = 5 // inside a function
//   // local scope
//   let empty = 1
//   let myAbujaTax = vat + localTaxAbuja;
//   return myAbujaTax + " " + name
// }
// const lagos = (name) => {
//   localTaxLagos = 2.5
//   // local scope
//   let myLagosTax = vat + localTaxLagos;
//   return myLagosTax+ " " + name
// }
// const ph = (name) => {
//   localTaxPh = 10.5
//   // local scope
//   let myPhTax = localTaxPh + vat;
//   return myPhTax+ " " + name
// }

// console.log('abuja ',abuja('Lizzy'))
// console.log('lagos', lagos('Sandra'))
// console.log('ph ', ph('Malik'))

//return key word

// A pure  function will give you same result at any point in time if you Pass in 
// same argument

// const pureFunction = (age) => {
//   return age + 10;
// }

// console.log('My age from pure function', pureFunction(25))

 // An impure function will give u diffrent result at any point in time 
 // even if the argument is the same

// const impureFunction = (age) => {
//   return age + Date.now();
// }
// console.log('My age from impure function', impureFunction(25))

//Math.randon generates a number between 0 - 1

//Comparison

// ==

// let y = false;

//let z = 0; // true = 1 && false = 0


// console.log('Answer', y === z) // 1 == 1

// == loose comparison (equality)

// === strict comparison (equality)

//Not Equal
/*
// !=

*/

// console.log('Answer 2', y !== z) //


//Greater than or equal to and less than or qual to

//>=

// let m = 56;

// let k = 34;

// console.log('number case', m >= 100)
// console.log('number case', m <= 100)

// let number = "0705612223"

// console.log('accepted phone number', number.length == 11)

// AND &&
// function compare(number, age, height){

//   if(number.length == 11 && age >= 13 && height >= 120){
//     return number + age + height
//   } else {
//     return alert("Go and fulfil other criteria")
//   }

// }

// console.log('Moment of Truth', compare('07067288454', 13, 120))

//OR ||

// function compareSecond(number, age, height){
  
//   if(number.length === 11 && age >= 13 || height >= 120){
//     return number + age + height
//   } else {
//     return "Go and fulfil other criteria"
//   }
  
// }

// console.log('Moment of Truth Second', compareSecond('07067288452', '34', 120))


//tomorrow start from if statement
// value = 'malik'
// if(value === ''){
//   alert('you must write ur name')
// }


//Conditional Statements(if, else, else if, switch)

// if(rain == true){
//   come along with an umbrella
// } else {
//   wear something light
// }

// if(its going to rain){
//   come along with umbrella
// }  else if (its going to snow){
//   wear heavy jacket and come along with umbrella
// } else if (its going to be sunny){
//   wear something light and carry a shade
// } else {
//   wear something light and a sneaker
// }

//< 5 snow, 5 to 15 harmattan, 16 -25 rain, 26 sunny

// function weatherApp(temperature, location){
//     if(temperature <= 5){
//       console.log('Its a Snowy Day, Wear Heavy Jacket and come along with Umbrella')
//     } else if (temperature >= 5 && temperature <= 15){
//       console.log('Its Harmattan day, Please wear Heavy Sweater')
//       if(location=='Abuja'){
//         console.log('I dont trust' + location + ' weather, harmattan might turn rain')
//       } else if(location == 'Lagos'){
//         console.log('I trust  weather,' + location + ' harmattan it  will not change')
        
//       } else {
//           console.log('I will confirm the weather when i step out')
//       }
//     }  else if(temperature >= 16 && temperature <= 25){
//       console.log('Its a Rainy day, Please wear Heavy Sweater and Dont forget Your Umbrella')
      
//     }
//     else if(temperature >= 26){
//       console.log('Its a Sunny day, Please wear Something light and Dont forget Your Shade')

//     } else {
//       console.log('You are an Alien from space because we dont know your weather type')
//     }
// }

// weatherApp(29, 'Abuja')

// weatherApp(14, 'Lagos')

// weatherApp('Me', 'Port Harcourt')

// weatherApp(11, 'Port Harcourt')


// let lunchDetails 

// switch('Nursery'){
  //   case 'Nursery':
  //       lunchDetails = 235647;
  //       break;
  
  //   case 'Primary':
  //     lunchDetails = true;
  //       break;
  
//   case 'Secondary':
//     lunchDetails = null;
//     break;

//     default:
//       lunchDetails = {
//         age: 56
//       }
// }

// let lunchDetails ;

// switch(9){
//   case 5:
//       lunchDetails = 'Master Card';
//       break;
    
//   case 6:
//   case 9:
//     lunchDetails = 'Verve Card';
//       break;
    
//   case 7:
//   case 12:
//     lunchDetails = 'Visa Card';
//     break;
    
//     default:
//       lunchDetails = 'Platinum Card';
      
// }

// console.log('Lunch Box Type', lunchDetails)

//Parameter ---- when creating the function

// function whatsYourName(nameAndAge){
//   console.log(nameAndAge)
//   console.log(nameAndAge)
//   console.log(nameAndAge)
//   console.log(nameAndAge)
//   console.log(nameAndAge)
// }

// whatsYourName(null)

//argument ---- when calling the function

// const abimbola = (number) => {

//   let lunchDetails = '';
  
//   switch(number){
//   case 5:
//       lunchDetails = 'Master Card';
//       break;
    
//   case 6:
//   case 9:
//     lunchDetails = 'Verve Card';
//       break;
    
//   case 7:
//   case 12:
//     lunchDetails = 'Visa Card';
//     break;
    
//     default:
//       lunchDetails = 'Platinum Card';
      
// }
//  return lunchDetails
// }

// console.log('Our ans from abimbola', abimbola(6))
// console.log('Our ans from abimbola', abimbola(12))
// console.log('Our ans from abimbola', abimbola(5))
// console.log('Our ans from abimbola', abimbola(9))

//DRY Dont Repeat Yourself


// function

// function functionName(a,b){

// }


//  //es6

// // const functionName2 = (a,b) => {

// // }



// // Returning a boolean in a function,

//   function GreaterThan( a, b ){
//     return a < b
//   } 

//   // console.log('My Super Answer', GreaterThan(11, 5))

  
//   let change 
//   let savings = 32456
  
//   const buyAndPay = (account, price) => {
//     //cloth that is 40000

//     if(account.toString().length < 10 || account.toString().length > 10){
//       return 'Please input correct account Number'
//     } else {

      
//       // price >= savings ? false : change = savings - price
//       // Ternary Operator

//         if(price >= savings){
//           return false
//         } else{
//           change = savings - price
//         }
//     }
//     return change
//   }

// // console.log('Let Me buy this T-Shirt', buyAndPay(0011223344 , 5000))
// // console.log('Let Me buy this T-Shirt', buyAndPay(0011223344 , 2000))





// //  return early from a function

// function returnEarly(number) {
//   if(number <= 4){
//     return 'Go play more'
//   }
//    else if(number >= 5 && number <= 10) {
//       return 'first stage'
//   }
//   else if(number >= 11 && number <= 20) {
//       return 'second stage'
//   } else {
//     return 'welcome to final stage'
//   }
// }
// returnEarly()

// console.log('my stage', returnEarly(138))

// // function returnEarly(number) {
// //   if (number <= 4) return "Go play more";
// //   else if (number >= 5 && number <= 10) return "first stage";
// //   else if (number >= 11 && number <= 20) return "second stage";
// //   else return "welcome to final stage";
// // }

// // { log } = window.console;

// // let colors = ['Blue', 'Pink', 'Red', 'Orange']


// // console.log('my color', colors[1])

// // Objects in JS,

// //Objects are always key value pair

// // let person = {
// //   name: 'Joy',
// //   age: 13,
// //   color: 'Green',
// //   fruits: ['Orange', 'Apple', 'Grape'],
// //   country: 'Web3Ladies Nation'
// // }

// //  access object with dot notation, 

// // console.log('my person', person.country)
// // console.log('my person', person.age)
// // console.log('my person', person.fruits[2])

// // person.fruits.push('Banana', 'Milk', 'chocolate')


// // console.log('updated user', person)

// //  with bracket notation
// // console.log('MY PERSONAL PERSON', person['name'])
// // console.log('MY PERSONAL PERSON', person['fruits'])

// // person['fruits'].push('Banana', 'Milk', 'chocolate')

// // console.log('updated user', person)

// const person = {
//     name: 'Joy',
//     age: 13,
//     color: 'Green',
//     fruits: ['Orange', 'Apple', 'Grape'],
//     country: 'Web3Ladies Nation'
//   }
//   console.log('My old properties', person)

// // Updating object property,
// person.name = 'Bimbo';
// person.age = 24
// person.country = 'Poland'
// person.fruits.push('Milk', 'Salad')


// console.log('My new properties 707', person.sports)




// //  adding a new property, 
// person.sports = ['football', 'swimming']
// // person.hobbies = {
// //   hobby1 : 'sleeping',
// //   hobby2: 'reading',
// //   hobby3: 'traveling'
// // }
// person.hobbies = {
//   hobby : 'Sleeping'
// }

// // person.hobbies = {
// //   hobby1 : person.age > 20 ? 'Reading' : 'Sleeping'
// // }

// console.log('My person properties 715', person)
// console.log('My person hobby', person.hobbies.hobby3)


//  deleting property from an object

// delete person.sports;

// console.log('My person properties 735', person)




// John and James

// ['orange', 'pen', 'biro', 'eraser', 'jotter']

//Rest operation
// const numbers = [1, 2, 3, 4, 5, 6];

// const [john, james, ...malik] = numbers;

// console.log('First', john)
// console.log('second', james)
// console.log('thirmd', malik)


// const person = {
//     name: 'Joy',
//     age: 13,
//     color: 'Green',
//     fruits: ['Orange', 'Apple', 'Grape'],
//     country: 'Web3Ladies Nation'
//   }


//   console.log(person.color)
//   console.log(person.country)

//   //Destructure
//   const {color, country, fruits} = person


//   console.log('My guy', country)
//   console.log('My guy', color)
//   console.log('My guy', fruits[1])

//   let finalAns = country + " " + color + " " + fruits[1]


//   console.log(finalAns)
  

//   let finalAnsSecond = `${country} ${color} ${fruits} `
//   console.log(finalAnsSecond)

//   function callMyWebsite(name){
//     const ans = `www.google.com/${name}`
//     console.log(ans)
//   }

//   callMyWebsite('malik')
//   callMyWebsite('jane')
//   callMyWebsite('joy')
//   callMyWebsite('bola')
//   callMyWebsite('vickie')
  

  //spread operator

  // let arrOne = [1, 'a', null, 5]

  // let arrTwo = [23, 'John', true, undefined]

  // let finalResult = arrOne.concat(arrTwo) // method one


  // console.log(finalResult)

  // let finalResultTwo = [...arrOne, ...arrTwo] //method two

  // console.log(finalResultTwo)


  // if (malik === true){
  //   bdlLDBHDbHJb
  // }
  //Foor loop
  // exp1 - starting point
  // exp2 - condition 
  // exp3 - increment

  // let i = 0
  // i++ // i = i + 1

  // const myArr = ['jane', 'ray', 'web', 'orange', 'apple']
                  //0       1     2       3         4       5
  // console.log(myArr.length)
                    //5
  // for(i=0; i > myArr.length; i--){
  //   console.log(i)
  // }

  // for(i=myArr.length - 1; i >= 0; i--){
  //   console.log(myArr[i])
  // }

  //week 4  assignment solution
  // function sumUp(num){
  //   let initial = 200
  //   for(i=1; i <= num; i++){
  //     initial = initial + i //
  //     console.log(initial)
  //   }
  //   console.log(initial)
  // }

//0-10
//1,2,3,4,5,6,7,8,9,10,11.

  // sumUp(5)

  
  // exp1 - starting point i = 2
  // exp2 - condition true
  // exp3 - increment


// let age = 34

// age = age + 78


// let i = 10
// while (i < 10) {
//   console.log(i)
//   i++;
// }


//DOM Document Object Model

// console.log('hello wolrld')

// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name

// let malik = document.getElementById("jane") //button

// console.log(malik)

// // const collection = document.getElementsByClassName("example")

// // console.log(collection)

// // document.addEventListener("mouseover", myFunction);
// // document.addEventListener("click", someOtherFunction);
// // document.addEventListener("mouseout", someOtherFunction);

// //Call back function

// // const arrowFunctuon = () => {
// //       function malik (){
        
// //       }
// // }

// // const clickMe = () => {
// //   console.log('Whats my name')
// //   let myName = document.getElementById('demo') //p tag
// //   myName.innerHTML = 'My name is Joy'
// // }

// // malik.addEventListener('click', clickMe)

// const myMouseOVer = () => {
//   console.log('Me playing with my laptop mouse')
//   document.getElementById('demo').innerHTML = 'Overrrrrrrr'
//   document.getElementById('change').style.backgroundColor = 'purple'
// }

// const buttonClick = () => {
//   console.log('me clicking button')
//   document.getElementById('demo').innerHTML = 'button clicked'
//   document.getElementById('change').style.backgroundColor = 'red'
//   // alert('Hello world')
//   return 2+23
// }

// const kickMeOut = () => {
//   console.log('Kick me out')
//   document.getElementById('demo').innerHTML = 'Mouse Out'
//   document.getElementById('change').style.backgroundColor = 'green'

// }

// malik.addEventListener('mouseover', myMouseOVer)
// malik.addEventListener('click', buttonClick)
// malik.addEventListener('mouseout', kickMeOut)


// // let result = document.getElementsByClassName('demo')

// // let myFunc = buttonClick()

// // console.log('ans', myFunc)
// // console.log('ans 2222222', result)

// // let anotherResult = result.innerText = "myFunc";




// let tweetButton = document.getElementById('clickme')

// const tweetFunction = () => {
//   // console.log('its working')
//  let myBox = document.getElementById('myText').value
//  document.getElementById('mytweet').innerText = myBox
//  let newPara = document.getElementById('mytweet')
//  document.getElementsByClassName('container').appendChild = newPara
//   // console.log(myBox)
// }

// tweetButton.addEventListener('click', tweetFunction)

// let test = document.querySelectorAll('p')

// console.log(test)

// use strict
// let x = 7;

// // console.log(x)

// let person = {
//       firstName:"John",
//       lastName:"Doe",
//       age:50,
//        eyeColor:"blue",
//        color: true,
//        longhair: false,
//        state: null,
//        gender: undefined,
//       };

  // person.map(x => console.log(x))


 

  // ourArr.map(() => {

  // })

//   let ourArr = ['Web3', 'Orange', null, true, 'web3', 234, {age:20}]
// console.log(ourArr[0])

//   ourArr.map((item, index)=>{
//     console.log(index)
//   })

//   // let ourString = ourArr.filter((item)=> typeof(item) === 'string'  )
//   let ourString = ourArr.filter((item)=> item === 'web3'  )
 
//   console.log(ourString)
  // ourArr.map(() => {

  // })

  // ourArr.map()

  // for(i=1; i <= num; i++){
  //       initial = initial + i //
  //       console.log(initial)
  //     }


  //Promise
  //fulfilled or resolved, pending, rejected

//   let wallet = 9;

//   const prom = new Promise((resolve, reject) => {
    
//         if (wallet >= 10) {
//             resolve ("Give Abimbola 10 Naira")
//         } else {
//             reject ("Please I dont have money")
//         }
    
// });

// console.log('Ans', prom)

//customers
// console.log('1') //wash with relaxer(20mins)(20mins), braid(10mins)
// console.log('2')// braid(10mins)
// console.log('3')// fix nail(5 mins)
// console.log('4') // ask price range (1min)



// const callMyName = async (wallet) => {
        
//   // console.log('Malik')
//     let nameOfMe = await new Promise((resolved, rejected) => {
        
//             if(wallet >= 20){
//               resolved(console.log('Richy'))
//             } else {
//               rejected(console.log('no money'))
//             }
        
//       })
   
// }

// callMyName(10)
// callMyName(30)
// callMyName(20)

//API Application Programming Interface
// console.log()

// function hello() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('I am adam.');
//     }, 5000);
//   });
// }

// async function async_msg() {
//   try {
//     let msg = await hello();
//     console.log('Malik')
//     console.log('Web3Ladies')
//     console.log(msg);
//   }
//   catch(e) {
//     console.log('Error!', e);
//   }
// }

// const hello = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('I am adam.');
//     }, 5000);
//   });
// }

// const async_msg = async () => {
//   try {
//     let msg = await hello();
//     // console.log('Malik')
//     // console.log('Web3Ladies')
//     console.log(msg);
//   }
//   catch(e) {
//     console.log('Error!', e);
//   }
// }

// async_msg();


// function sayMyName(name){
//   return console.log(name)
// }

// const sayMyNameTwo = (name) => console.log(name)

// sayMyName('Vickie')
// sayMyNameTwo('Malik')


//Fetch or axios

//JSON Javscript Object Notation

// let ourButton = document.getElementById('clickme')

// const callOurBackend = async () => {
//     // let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     // .then(result => result.json()).then(data => console.log(data))

//     let web3ladies = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json()).then(ladies => console.log(ladies))

    
//     // console.log('Our Result', web3ladies)
// }

// ourButton.addEventListener('click', callOurBackend)

// callOurBackend()

// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// Arrow Function
// const arrowFunction = () => {

// }

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// let value = "A";
// let number =10;
// switch (value) {
//   case "A":
//     if(number > 7){
//       console.log('Final')
//     }
//     break;
//     case "B": 
//     console.log('I got B')
//     // do something else
//     break;
//     case "C":
//     console.log('I got C')
//     //
//     break;
    
//     default :
//     console.log('Dont come to my class')
  	// something if anything not match
// }


// An higher order function is 
// a function that takes in a function as a parameter



// function simpleFunction(number){
 
// return number + number
// }


// const mySecondFunction = () => {
//   return 3 + 7
// }



// console.log(
//   simpleFunction(mySecondFunction())
// )

//HTTP MEthods
// C - Create, R - Read, U - Update/ P - Patch, D - Delete
  // POST            GET           UPDATE           DELETE


  // local and global

  // Define the closure
// function multFn() {
//   var mult = 9;
//   return function(val) {
//     let max = mult * val;
//     return max;
//   }
// }
  
// // Use the closure
// var mult = multFn();
// console.log(mult(18));


//query selector
//Table
//fetch api

const fetchAPI = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

  let a = 4
  a = 4 + 2
  a+=2
  console.log('my api result', response)
  let allData = '';
  for(i=0; i<response.length; i++){
    allData += `
    <tr>
    <td>${i + 1}</td>
    <td>${response[i].name}</td>
    <td>${response[i].email}</td>
    <td>${response[i].address.suite} ${response[i].address.street} ${response[i].address.city}</td>
    <td>${response[i].phone}</td>
    <td>${response[i].username}</td>
    </tr>
    `
  }

  console.log(allData)

  let ourTable = document.getElementById('tableOne')
  ourTable.innerHTML = allData
  console.log(ourTable)
}

fetchAPI()