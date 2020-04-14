/* Global Variables */
// Personal API Key for OpenWeatherMap API

const apiKey = 'ddd366c23ce3e78e3550837db5c4410c';
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e) {
    const feelText = document.getElementById('feelings').value;

    // get the API data
    getApiData(apiURL, document.getElementById('zip').value, apiKey)
    .then(function (APItemperature) {
        postData('/add', { temperature: APItemperature, date: newDate, userResponse: feelText });
    })
    .then(
        updateUI()
      )


}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getApiData = async (apiURL, zip, key) => {
    const response = await fetch(apiURL + zip + ',us&appid=' + key);
    try {
        const webData = await response.json();
        APItemperature = webData.main.temp;
        return APItemperature
    } catch (error) {
        console.log("error", error);
    }
}










/* Function to POST data */
//Help From "Async GET"
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json()
    return allData
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };


//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        const recRec = allData[allData.length - 1];
        document.getElementById('date').innerHTML = 'Date: ' + recRec.date;
        document.getElementById('temp').innerHTML = 'Temperature: ' + ((recRec.temperature * 1.8) - 459.67);
        document.getElementById('content').innerHTML = 'Thoughts: ' + recRec.userResponse;
    }catch(error){
        console.log("error",error)
    }
}