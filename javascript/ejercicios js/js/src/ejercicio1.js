
// function f(x, y=2, z=7) {
//   return x+y+z;
// }
// console.log(f(5, undefined));

// var animal = 'kitty';
// var result = (animal === 'kitty') ? 'cute' : 'still nice';
// console.log(result); // cute

// function animal() {
//   var animal = 'kitty';
//   var result = '';

//   if (animal === 'kitty') {
//     result = 'cute';
//   } else {
//     result = 'still nice';
//   }

//   return result
// }
// console.log(animal());

// function equal(){
//   var a= 0;
//   var str = 'not a';
//   var b = '';
  
//   b =a === 0 ? ( a= 1, str += 'test') : ( a = 2);
// }
// console.log(equal())

// function evaluation(){
//   var value = 1;
//   switch (value) {
//     case 1:
//       console.log('I will always run');
//       break;
//     case 2:
//       console.log('I will never run');
//       break;
//     default:
//       break;
//   }
// }
// console.log(evaluation());


// function valoration(){
//   var a= 'hello' || ''; //true
//   var b = '' && [];  //false
//   var c = undefined && 0; //undefined
//   var d = 1 && 5; //true
//   var e = 0 && {}; //false
//   var f = 'hi' && [] && 'done'; //true
//   var g = 'bye' && undefined && 'adios';//undefined
// }

// var clientes = ['Cliente1', 'Cliente2'];
// var empleados = ['Empleado1', 'Empleado2'];

// var contactos = clientes.concat(empleados);
// console.log(contactos);


// var clientes = ['Cliente1', 'Cliente2'];
// var empleados = ['Empleado1', 'Empleado2'];

// clientes.push(...empleados);
// console.log(clientes);


// var numbers = [5, 32, 43, 4];

// var resultadoFilter = numbers.filter(function(n) {
//   return n % 2 !== 0;
// });

// console.log(resultadoFilter);

// var people = [
//   { id: 1, name: "John", age: 28 },
//   { id: 2, name: "Jane", age: 31 },
//   { id: 3, name: "Peter", age: 55 }
// ];

// function filterPeopleUnder35(peopleArray) {
//   return peopleArray.filter(function(person) {
//     return person.age < 35;
//   });
// }

// var result = filterPeopleUnder35(people);

// console.log(result);


// let people = [
//   { name: "bob", id: 1 }, 
//   { name: "john", id: 2 },
//   { name: "alex", id: 3 }, 
//   { name: "john", id: 3 }
// ];

// function countNameOccurrences(peopleArray) {
//   let nameCount = {};

//   peopleArray.forEach(function(person) {
//     let name = person.name;
//     nameCount[name] = (nameCount[name] || 0) + 1;
//   });

//   return nameCount;
// }

// let result = countNameOccurrences(people);
// console.log(result);


// function printMinMax(arr) {

//   var max = Math.length(...arr);
//   var min = Math.length(...arr);

//   console.log("Número máximo:", max);
//   console.log("Número mínimo:", min);
// }

// var myArray = [1, 2, 3, 4];
// printMinMax(myArray);

// function sortKeysByValue(obj) {
//   var keys = Object.keys(obj);

//   keys.sort(function (a, b) {
//     return obj[a] - obj[b];
//   });

//   return keys;
// }

// var myObject = {
//   key1: 10,
//   key2: 3,
//   key3: 40,
//   key4: 20
// };

// var sortedKeys = sortKeysByValue(myObject);
// console.log(sortedKeys);

// var anObject = {
//   foo: 'bar',
//   length: 'interesting',
//   '0': 'zero',
//   '1': 'one!',
// };
// var anArray = [ 'zero.', 'one.'];

// console.log(anArray[0], anObject[1]);
// console.log(anArray[1], anObject[1]);
// console.log(anArray.length, anObject.length);
// console.log(anArray.foo, anObject.foo);

// console.log(typeof anArray == 'object', typeof anObject == 'object');
// console.log(anArray instanceof Object, anObject instanceof Object);
// console.log(anArray instanceof Array, anObject instanceof Array);
// console.log(Array.isArray(anArray), Array.isArray(anObject));

// var obj = {
//   a: 'hello',
//   b: 'this is',
//   c: 'javascriptp!',
// };

// var array = Object.values(obj);
// console.log(array); //['hello', 'this is', 'javascript!']


// function imprimirSerie() {
//   for (var i = 0; i <= 98; i += 2) {
//     console.log(i);
//   }
// }

// imprimirSerie();


// let zero = 0;
// function multply(x) {
//   return x*2;
// }

// function add( a=1 + zero, b = a, c = b + a, d = multply(c) ){
//   console.log( (a+b+c), d);
// }
// add(1);
// add(3);
// add(2,7);
// add(1,2,5);
// add(1,2,5,10);


// document.addEventListener("DOMContentLoad", function() {

//   function actualizarRecuadro() {
//     var recuadro = document.getElementById("recuadro");
//     var now = new Date();
//     recuadro.textContent =+ now.toLocaleTimeString();
//   }

//   actualizarRecuadro();

//   setInterval(actualizarRecuadro, 1000);
// });


