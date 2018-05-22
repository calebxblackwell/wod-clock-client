export const registerUser = (username, password) => {
  return () => {
    fetch(`localhost:8080/api/users/register`, {
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
