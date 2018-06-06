export const saveUserTime = (secondsElapsed) => {
    return () => {
      console.log('return saveUserTime');
      fetch('http://localhost:8080/api/time/time' , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify
      }).then(res => console.log(res))
      .then(response => {localStorage.getItem('token')})
      .catch(error => console.log(error))
    }
  }
//line 8 res.json()
