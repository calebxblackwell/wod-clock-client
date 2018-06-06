//this is the ajax request for the workout information from wodify api
const url = 'https://app.wodify.com/API/WODs_v1.aspx';
const data = {apiKey: 'FvunGgKZG43ArkOBAs8KoFrT4', date: 'date',
    location: 'Black Iron Gym', program: 'CrossFit', type: 'json'};

export const fetchPrograms = () => {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
  }
})
    .then(response => response.json())
    .then(json => console.log(json))
  .catch((ex) => console.log('parsing failed', ex))
  }
}
