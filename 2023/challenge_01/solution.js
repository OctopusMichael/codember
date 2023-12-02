

const fs = require('fs');
const filePath = 'message_01.txt';
try {
 
  const contenido = fs.readFileSync(filePath, 'utf-8');

  let arrData = contenido.split(" ");

  const listAnimals = (arrData) => {
    let contador = {};

    for (let i = 0; i < arrData.length; i++) {
      if (contador[arrData[i]]) {
        contador[arrData[i]]++;
      } else {
        contador[arrData[i]] = 1;
      }
    }

    let Output = []

    Object.keys(contador).forEach(element => Output.push(element, contador[element]))
    return Output.join("")
  };

  console.log(listAnimals(arrData));
} catch (error) {

  console.error('Error al leer el archivo:', error.message);
}







