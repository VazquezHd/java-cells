
new Promise(function(resolve,reject) {
  setTimeout(() => {
    resolve(10)
  }, 250);
})
.then((num) => {
  console.log('first then:', num); return num *2; })
.then((num) => {
  console.log('second then:', num); return num *2; })
.then((num) => {
  console.log('last then:', num); })
