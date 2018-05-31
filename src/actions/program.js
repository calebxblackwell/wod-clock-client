

//this is the ajax request for the workout information from wodify api
export const fetchPrograms = () => {
  return (dispatch) => {
    fetch('https://app.wodify.com/API/WODs_v1.aspx?apikey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&encoding=utf-8')
    .then(response => response.json())
    .then(json => console.log(json))
  .catch((ex) => console.log('parsing failed', ex))
  }
}
