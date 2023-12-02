
/* const validate = (word, letter) => word.split("").filter(e => e === letter).length */

const validate = (word, letter) => {
  let result = word.split("")
  return result.filter(e => e === letter).length
}

const init = async () => {
  let res = await fetch("/challenge_03/data.txt");
  let data = await res.text()
  let passwords = data.split("\r\n")

  let incorrectPassword = []

  for (let passwordEntry of passwords) {
    const [policy, password] = passwordEntry.split(": ")
    const [pattern, keyLetter] = policy.split(" ")
    const [minString, maxString] = pattern.split("-")

    const min = Number(minString);
    const max = Number(maxString.trim())


    const count = validate(password, keyLetter)
    const isInvalid = count < min || count > max

    if (isInvalid) {
      incorrectPassword.push(password)
    }


  }


  console.log(incorrectPassword[12])
  return incorrectPassword[41]


}


init()














