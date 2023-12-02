

const VALUE_1 = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
const VALUE_2 = "&##&*&@&"


let newValue = VALUE_1.split("")


const desencriptar = (newValue) => {
  let result = []
  let contador = 0


  /* for (let i = 0; i < newValue.length; i++) {
    if (newValue[i] === "#") {
      contador++
    } else if (newValue[i] === "@") {
      contador--

    } else if (newValue[i] === "*") {
      contador = contador * contador
    } else {
      result += `${contador}`
    }

  }

  return result */

  for (let i = 0; i < newValue.length; i++) {
    switch (newValue[i]) {
      case "#":
        contador++
        break;
      case "@":
        contador--
        break;
      case "*":
        contador *= contador
        break;

      default:
        result.push(contador)
    }


  }
  return result.join("")

}

console.log(desencriptar(newValue))

