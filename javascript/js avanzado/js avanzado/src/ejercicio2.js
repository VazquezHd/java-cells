
let promise1 = new Promise( (resolve, reject) => {
  setTimeout( function() {
    resolve("Resolucion correcta")
  }, 250);
});

promise1.then(mensaje => {
  console.log(`Mensaje de resolucion: ${mensaje}`);
})