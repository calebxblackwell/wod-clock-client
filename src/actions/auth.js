export const registerUser = (username, password) => {
  return () => {
    fetch(`https://wodclock.netlify.com`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(json => window.location = '/login')
  .catch(error => console.log(error))
  }
}



export const loginUser = (username, password) => {
  return () => {
    fetch('https://wodclock.netlify.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(response => {
     localStorage.setItem("token", response.authToken )
   }).then(json => window.location = '/main')
    .catch(error => console.log(error))
  }
}
