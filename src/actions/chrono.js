export const saveUserTime = (secondsElapsed) => {
    return () => {
      fetch('http://localhost:8080/api/auth/login' , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify
      }).then(res => res.json())
      .then(response => {localStorage.getItem('token')})
      .catch(error => console.log(error))
    }
  }
