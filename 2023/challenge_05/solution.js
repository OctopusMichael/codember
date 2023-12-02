
const init = async () => {
  let res = await fetch("./challenge_05/data.txt")
  let data = await res.text()
  let dataArr = data.split("\r\n")
  let validate = []
  let invalid = []
  let result = ""


  for (users of dataArr) {
    const [id, username, email, age, location] = users.split(",")
    const alfanumerico = /^[a-zA-Z0-9]+$/
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    if (alfanumerico.test(id) && id !== ""
      && alfanumerico.test(username) && username !== ""
      && emailValidation.test(email) && email !== ""
    ) {
      validate.push(username)
    } else {
      invalid.push(username)
    }
  }
  
  for (let i = 0; i < invalid.length - 1; i++) {
    if (invalid) {
      result += invalid[i][0]
    }
  }

  console.log(result)
  return result
}

init()
