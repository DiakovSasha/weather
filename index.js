import products from './products.js';
const containerEl = document.querySelector('.container');
console.log(containerEl);

const markUp = function ({ name, description, price }) {
  const listEl = document.createElement('article');

  const titleEl = document.createElement('h2');
  titleEl.classList.add('product-title');
  titleEl.textContent = `Name: ${name}`;

  const descriptionEl = document.createElement('p');
  descriptionEl.classList.add('product-descr');
  descriptionEl.style.color = 'blue';
  descriptionEl.textContent = `Description - ${description}`;

  const priceEl = document.createElement('p');
  priceEl.classList.add('product-price');
  priceEl.style.color = 'red';
  priceEl.textContent = `Price : ${price}`;

  listEl.append(titleEl, descriptionEl, priceEl);
  return listEl;
};

const elements = products.map(markUp);
console.log(elements);
containerEl.append(...elements);
// ===========================задача 12 модуль 3
// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//   for(const key in object){
//       if(object.hasOwnProperty(key)){
//         console.log([key].length);
//       propCount += [key].length
//     }
//   }
//     // Change code above this line
//     return propCount;
//   }
// console.log(countProps({}) );
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// =====================================================модуль 3 задача 13======================================
// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     console.log(apartment[key]);
//     values.push(apartment[key]);
// }
// ======================================================модуль 3 задача 14===========================================
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object)
//   console.log(keys);
//     for (const key of keys) {
//         console.log(key);
//         propCount += 1;

//     }

//     return propCount;
//     // Change code above this line
//   }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// ========================================================модуль 3 задача 18==================================================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         console.log(product);
//         if(product.name === productName) {

//             return product.price
//         }
//     }
//    return null
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));
// =======================================================модуль 3 задача 19============================================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const newArr = [];
//     // Change code below this line
//     for (const product of products) {
//         console.log(product);
//         const keys = Object.keys(product);
//         console.log(keys);
//         for (const el of keys) {
//             console.log(el);
//             if (el === propName) {
//                 console.log(product[el]);
//                 newArr.push(product[el]);
//             }
//         }
//     }
//     return newArr;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));
// ==============================================модуль 3 задача 20===================================================
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const total = 0
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   for (const product of products) {
//           console.log(product);
//           if (product.name === productName) {

//             return product.price * product.quantity;

//           }
//       }
//       return 0
//   }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));
// =================================================модуль 3 задача 31======================================================
// function add(...args) {
//   let total=0
//   console.log(args);
//   for(const arg of args){

//     total+=arg
//   }
//   // Change code above this line

//   return total
// }
// console.log(add(15, 27) );
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));
// ================================================модуль 3 задача 32==========================================================
// Change code below this line
// function addOverNum(a, ...args) {

//   let total = 0;
// console.log(args);
//   for (const arg of args) {
//     if(a < arg){
//       total += arg;
//     }

//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// ====================================================модуль 3 задача 33==================================================
// Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line
//     for (const element of array) {
//         console.log(element);
//         if (args.includes(element)) {
//             matches.push(element);
//         }
//     }
//     // Change code above this line
//     return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
// =================================================модуль 3 задача 35========================================================
// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         console.log(bookIndex);
//         this.books.splice(bookIndex, 1, newName);

//         // Change code above this line
//     },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));
// =================================================модуль 3 задача 39========================================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//  const potionIndex = this.books.indexOf(potionName),
//  this.potions.splice(potionIndex, 1)

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// =====================================================модуль 3 задача 41 =========================================================
// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (newPotion.name === potion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//         console.log(this.potions);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             console.log(this.potions[i].name);
//             if (this.potions[i].name === potionName) {
//                 console.log(i);
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         console.log(oldName);
//         console.log(newName);
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//     },
//     // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(
//     atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// );
// ========================================================================================================

// const dublicate = function (array) {
//     const newArr = [...array,...array];
//     return newArr;
// };
// console.log(dublicate([1, 2, 3, 4, 5]));
// const fnA = function (message, callback) {
//     console.log(callback);
//     console.log(message);
// };
// const fnB = function () {
//     console.log('this is fnB');
// };
// console.table(fnA('this is fnA', fnB));

// console.log([1, 2, 3, 4, 5, 5]);
// const potions = [
//     { name: 'Speed potion', price: 460, quantity: 3 },
//     { name: 'Dragon breath', price: 780, quantity: 7 },
//     { name: 'Stone skin', price: 520, quantity: 2 },
// ];
// const arrayMap = potions.map((potion) => potion.name);
// console.log(arrayMap);
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// };
// numbers.forEach(logMessage);
// // console.log(qna);
// ====================================================module 4  task 4==================================================
//     const pizzaPalace = {
//         pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//         order(pizzaName, onSuccess, onError) {
//             console.log(this.pizzas.includes(pizzaName));
//             return this.pizzas.includes(pizzaName)
//                 ? onSuccess(pizzaName)
//                 : onError(
//                     `There is no pizza with a name ${pizzaName} in the assortment.`
//                 );
//         },
//     };

//     // Change code above this line

//     // Callback for onSuccess
//     function makePizza(pizzaName) {
//         return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//     }

//     // Callback for onError
//     function onOrderError(error) {
//         return `Error! ${error}`;
//     }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
// ==================================================================================================================================
// ========================ЗАМЫКАНИЕ=====================================================

// const fnA = function (parameter) {
//   const innerFunctionVar = 'hello this is innerFunctionVar';
//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerFunctionVar);
//   };
//   return innerFunction;
// };
// console.log(fnA);
// const fnB = fnA(5555);
// fnB()
// console.log(fnB);
// =====================================CALLBACK=====================================================
// const fnA = function (message, callback) {
//   console.log('function fnA', message);
//   callback()
// };
// const fnB = function () {
//   console.log('function fnB');
// };
// fnA('qwerty', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
//   return result;
// };
// const secondFunction = function (a, b) {
//   return a + b;
// };
// const thirdFunction = function (a, b) {
//   return a - b;
// };
// const multiplyFunction = function (a, b) {
//   return a * b;
// };
// console.log(doMath(21, 12, secondFunction));
// console.log(doMath(21, 12, thirdFunction));
// console.log(doMath(21, 12, multiplyFunction));
// ============================================================forEach===============================
// const numbers = [2, 4, 5, 3, 21, 1];
// numbers.forEach(function (number, index, array){
//     return  array[0] = 36
// })
// console.log(numbers);
// ==============================================module 4 task 13====================================
// function changeEven(numbers, value) {
//   const newArr = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//     } else {
//       newArr.push(number);
//     }
//   });
//   return newArr;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// ======================================================module 4 task 20=================================
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);

// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );
// console.log(uniqueGenres);
// ==============================================module 4 task 21==================================================
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line

//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   console.log(topRatedBooks);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);
//   console.log(booksByAuthor);
// ======================================================module 4 task 35 ============================================
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, num)=> num.playtime/num.gamesPlayed + acc,0)
// console.log(totalAveragePlaytimePerGame);
// ===================================================module 4 task 39===============================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b)=> a - b);
// // console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort((a, b)=> b - a);
// =======================================================codewars==================================================
// function pickIt(arr){
//   var odd=[],even=[];
//   //coding here
//   for(let i = 0;i<arr.length;i+=1){
//     console.log(arr[i]);
//     if(arr[i] % 2 === 0){
//       even.push(arr[i])
//     }else{
//       odd.push(arr[i])
//     }
//   }

//   return [odd,even];
// }
// console.log(pickIt([1,4,5,6,7,8,9,0]));
// =====================================================================================================================
// function grabDoll(dolls){
//   var bag=[];
//   //coding here
//   for(const doll of dolls){
//     if(doll === "Hello Kitty" || doll === "Barbie doll"){
//       bag.push(doll)
//     }else if(bag.length === 3){
//       break
//     }else {
//       continue

//     }

//   }
//   return bag;
// }
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
// ===========================================================================================================================
// const array = [1, 2, 3, 4, 5];
// const newArr = array.slice(array.length -1);
// console.log(newArr);
// =====================================================================================================
//  const fn = (arr) =>`вот индекс елемента ${arr.findIndex(item => item ==='вася')}`;

// console.log(fn(['петя', 'вася', 'федя']));
// ==========================
// const changeColor = function (color) {
//   console.log('changecolor this ', this);
//   this.color = color;
// };
// const hat = {
//   color: 'black',
// };
// const sweater = {
//   color: 'white',
// };

// const changeHatColor = changeColor.bind(hat);
// changeHatColor('orange');
// console.log(hat);

// ==================================================================================================================
// const user = {
//   name: 'mango',
//   showTag() {
//     console.log('this =', this);
//   },
// };
// user.showTag();

// const outerShowUsertag = user.showTag;
// console.log(outerShowUsertag);
// ===================================================================================================================
// const counter = {
//   value: 0,

//   increment(value) {
//     this.value += value;
//     console.log('this increment =', this);
//   },
//   decrement(value) {
//     this.value -= value;
//     console.log('this decrement', this);
//   },
// };
// const updateColor = function (value, operation) {
//   operation(value);
// };
// console.log(updateColor(10, counter.increment.bind(counter)));
// console.log(updateColor( 5, counter.decrement.bind(counter)));
// console.log(counter);
// ==============================================================================================================
// const objA = {
//   x: 5,
// };

// ;
// const objC = {
//   z: 20,
// };

// const objB = Object.create(objC)
// console.log(objA);
// console.log(objB);
// console.log(objC);

// const Car = function ({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.prie = price;
// };

// const myCar = new Car({ brand: 'Audi', model: 'Q7', price: 40000 });
// console.log(myCar);
// ==============================================================================================================
// const makeTotal = function (...args) {
//   return args.reduce((acc, arg) => acc + arg, 0);
// };
// console.log(makeTotal(1, 54, 3, 5, 78, 90, 123));
// =================================================================================================================
// function fakeBin([...x]) {
//   // const normalized = x.split('');

//   let numbers = x.map((element) => {
//     if (element < 5) {
//       return (element = 0);
//     } else if (element >= 5) {
//       return (element = 1);
//     }
//   });
//   console.log(numbers);
//   return numbers.join('');
// }

// console.log(fakeBin('45385593107843568'), '01011110001100111');
// console.log(fakeBin('509321967506747'), '101000111101101');
// console.log(
//   fakeBin('366058562030849490134388085'),
//   '011011110000101010000011011'
// );
// =====================================================================================================================
// const countSheeps = function (array) {
//   let count = 0;
//   array.map((sheep) => (sheep === true ? (count += 1) : (count += 0)));
//   return count;
// };

// console.log(countSheeps([true, false, true, true, false, true, true]));
// =======================================================================================================================
// const reverseNumber = (...args) =>
//   String(args).split('').map(Number).reverse().join();

// console.log(reverseNumber(123456));
// ====================================================================================================================
// function removeChar(str){
//     //You got this!
//    return str.slice(1, str.length -1)
//    };
//    console.log(removeChar('eloquent'));
//    console.log(removeChar('country'));
//    console.log(removeChar('person'));
// =======================================================================================================================
// const fN = function (num) {
//   return String(num);
// };
// console.log(fN(60));
// =========================================================================================================================
// const DNAtoRNA = ([...dna])=>dna.map((a) => a === 'T'? a = 'U': a = a).join('')

//   //   const  normalized = dna.split()
//   //   console.log(normalized);
//   // create a function which returns an RNA sequence from the given DNA sequence

// console.log(DNAtoRNA('TTTT'));
// console.log(DNAtoRNA('GCAT'));
// =============================================================================================================================
// function positiveSum(arr) {
//   let total = 0;
//   arr.map((element) => {
//     console.log(element);
//     if (element > 0) {
//       return (total += element);
//     }
//   });
//   return total;
// }
// console.log(positiveSum([1, 2, 3, 4, 5]));
// console.log(positiveSum([1, -2, 3, 4, 5]));
// console.log(positiveSum([-1, 2, 3, 4, -5]));
// =========================================================module 5 task 10======================================================================================
// class Storage {
//   constructor(config) {
//     this.items = config;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const itemToremoveIndex = this.items.indexOf(itemToRemove)
//     this.items.splice(itemToremoveIndex,1)
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems());
// ==============================================================================================================================================================
// function squareSum(numbers){
//     return numbers.reduce((a, b)=> a+ b * b, 0)
//     }
//     console.log(squareSum([1,2]));
//     console.log(squareSum([0, 3, 4, 5]));
// ===============================================================================================================================================================
// function opposite(number) {
//     return - number
//     }
//     console.log(opposite(1));
//     console.log(opposite(-32))
//     console.log(opposite(0));
// ========================================================================================================================================================
// const abbrevName = (name) => name.split(" ").map((n)=>n[0]).join('.').toUpperCase()
// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feenan"));
// ====================================================================================================================================
// var countSheep = function (num){
//     for(let i = 0; i < num; i += 1){
//       return `${num} sheep...`
//     }
//    if( i === 0){
//      return ''
//    }
//   }
// =============================================================================================================================================================
// function highAndLow(numbers) {
//   const toNumArr = numbers.split(' ');
//   console.log(toNumArr);
//   return ` ${Math.max(...toNumArr)} ${Math.min(...toNumArr)} `;
// }
// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
// console.log(highAndLow('1 2 3'));
// 2nd solution
// const toNumArr = numbers.split(' ').map(Number);
// console.log(toNumArr);
// const max = Math.max(...toNumArr)
// const min = Math.min(...toNumArr)
// return max + " " + min
// ======================================================================================================================================================
// function accum(s) {
//     const letters = s.split('');
//     const words = [];
//     for(var i = 0; i < letters.length; i+=1) {

//       words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
//     }

//     return words.join('-');
//   }
// function accum(s) {
//     return s
//       .split('')
//       .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
//       .join('-')
//   }
// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"
// =========================================================================================================================================================
