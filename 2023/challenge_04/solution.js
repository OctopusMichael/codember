
function testing(password) {
  let count = {}
  let result = []
  let order = []
  for (letter of password) {
    if (count[letter]) {
      count[letter]++
    } else {
      count[letter] = 1
      order.push(letter)
    }
  }
  for (let letter of order) {
    if (count[letter] === 1) {
      result.push(letter);
    }
  }

  return result.join("")
}




const init = async () => {
  let res = await fetch("/challenge_04/data.txt");
  let data = await res.text();
  let lines = data.split("\r\n")

  let validPassword = []
  for (passwordEntry of lines) {
    const [password, unchecksum] = passwordEntry.split("-")
    const passwordArr = password.split("")
    const unchecksumArr = unchecksum.split("").join("")

    const newPassword = testing(passwordArr)


    if (newPassword === unchecksumArr) {
      validPassword.push(unchecksum)
    }

  }
  console.log(validPassword[32])
  return validPassword[32]

}
init()