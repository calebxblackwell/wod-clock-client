//this is the ajax request for the workout information from wodify api
//const url = 'https://app.wodify.com/API/WODs_v1.aspx?apiKey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&date=date&program=CrossFit&location=BlackIronGym';
const url = 'https://app.wodify.com/API/Programs_v1.aspx?apiKey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&date=date&program=CrossFit&location=BlackIronGym';

export const fetchPrograms = () => {
  return (dispatch) => {
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
//     fetch(url, {
//       method: 'GET',
//       headers:{
//         'Content-Type': 'application/json'
//   }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
//   .catch((ex) => console.log('parsing failed', ex))
   }
}
