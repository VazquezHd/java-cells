
const pets = [
  { name: 'lucho', species: 'dog' },
  { name: 'felix', species: 'cat' },
  { name: 'nemo', species: 'fish' },
]

var petNames = [];

for (var i = 0; i < pets.length; i++) {
  petNames.push( pets[i].name)
  
}

console.log( `Pets name >>: ${petNames}`);
console.log( `Ejemplo template string A: ${5+5}`);
console.log( `Ejemplo template string B: ${petNames.length >3 ? "ok" : "cancel"}`);