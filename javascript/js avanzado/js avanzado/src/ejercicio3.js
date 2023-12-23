
function divide(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject(new Error('No se puede dividir entre cero'))
    } else {
      resolve(dividendo/divisor)
    }
  });
}

try {
  const result = divide(5,1);
  console.log(result);
} catch(err) {
  console.log(err.message);
}