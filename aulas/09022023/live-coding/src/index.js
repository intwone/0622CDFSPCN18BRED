const axios = require('axios')
const fetch = require('node-fetch')

function getRepositories() {
  const githubApi = 'https://api.github.com/users/intwone/repos'
  const response = axios.get(githubApi)
  return response
}

// console.log(getRepositories())

function getRepositories2() {
  const githubApi = 'https://api.github.com/users/intwone/repos'
  axios.get(githubApi)
    .then(qualquercoisa => console.log(qualquercoisa))
    .catch(erro => console.log(erro.message))
}

// getRepositories2()

function getRepositories3() {
  const githubApi = 'https://api.github.com/users/intwone/repos'
  fetch(githubApi)
    .then(response => response.json())
    .then(data => data)
    .catch(erro => erro.message)
}

// getRepositories3()

async function getRepositories4() {
  try {
    const githubApi = 'https://api.github.com/users/intwone/repos'
    const response = await axios.get(githubApi)
    return response
  } catch (error) {
    return error
  }
}

// (async() => {
//   console.log(await getRepositories4())
// })()

async function getRepositories5(user) {
  try {
    const githubApi = `https://api.github.com/users/${user}/repos`
    const response = await axios.get(githubApi)
    return response
  } catch (error) {
    return error
  }
}

// tempo_execucao: 1.847s (COM OS AWAITs)
// tempo_execucao: 528.677ms (COM O PROMISE.ALL)

(async() => {
  console.time('tempo_execucao')
  const user1 = getRepositories5('mfcastilho')
  const user2 = getRepositories5('wendelcutrim')
  const user3 = getRepositories5('Urautog')

  const [resUser1, resUser2, resUser3] = await Promise.all([user1, user2, user3])
  
  console.log({
    mario: resUser1.status,
    wendel: resUser2.status,
    rodrigo: resUser3.status
  })
  console.timeEnd('tempo_execucao')
})()