export const registerUser = (username, password) => {
  return () => {
    fetch(`http://localhost:8080/api/users/register`, {
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
    fetch('http://localhost:8080/api/auth/login', {
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
