//this is the ajax request for the workout information from wodify api

//the api with endpoint WODs is the one needed for this app. But their location
//function is broken on their end. This can be proved by instead using the url
//which is commented out below, where the location isn't flagged as incorrect.
//both urls return objects in the command line, therefore my code works, though
//of course their broken location causes enough error for my code to not print
//to the screen, regardless of what I have coded.
//the service team at Wodify refused to help me further troubleshoot this matter.
//Please consult my PM David Coulter with any additional questions.
//thank you.
const url = 'https://app.wodify.com/API/WODs_v1.aspx?apiKey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&date=date&program=CrossFit&location=BlackIronGym';
//const url = 'https://app.wodify.com/API/Programs_v1.aspx?apiKey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&date=date&program=CrossFit&location=BlackIronGym';

export const fetchPrograms = () => {
  return (dispatch) => {
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
   }
}
