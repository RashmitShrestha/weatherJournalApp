// Personal API Key for OpenWeatherMap API
//w3Sschool and Stack Overflow helped with the code and underestanding
const geoApiUn = 'rashmeat';
// Create a new date instance dynamically with JS


//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function geoPerformAction(e) {

    // Friends helped with getting API data
    getGeoApiData('http://api.geonames.org/postalCodeSearchJSON?postalcode=', document.getElementById('input1').value, geoApiUn)
    .then( (APIarr) => {
        postGeoData('/geoadd', { Lat:  APIarr[1], Lon: APIarr[0], Pla: APIarr[2] });
    })
  
    .then(function (){
        updateUIGeo();
        })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getGeoApiData = async (apiURL, place, geoApiUn) => {
    const response = await fetch(apiURL + place + '&maxRows=10&username=' + geoApiUn);
    try {
        const webData = await response.json();
        Long = webData.postalCodes[0].lng;
        Lat = webData.postalCodes[0].lat;
        Pla = webData.postalCodes[0].placeName;

        const APIarr = [Long, Lat, Pla];

        return APIarr;
      } 
      catch (error) {
        console.log("error", error);
    }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveGeoData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postGeoData = async ( url = '', data = {})=>{

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
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIGeo = async () => {
    const request = await fetch('/geoall')
    try{
        const recRec = await request.json();
        console.log(recRec);
        document.getElementById('lat').innerHTML =  recRec.Lat;
        document.getElementById('lon').innerHTML =  recRec.Lon;
        document.getElementById('place').innerHTML =  recRec.Pla;

      }catch(error){
        console.log("error",error)
    }
}









//Weatherbit Starts Here



// Personal API Key for OpenWeatherMap API
//w3Sschool and Stack Overflow helped with the code and underestanding
const weaApiKey = '48729f43d7224c7083c91e6bcdad825b';
// Create a new date instance dynamically with JS

//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function weaPerformAction(e) {

    // Friends helped with getting API data
    getWeaApiData('https://api.weatherbit.io/v2.0/forecast/daily?&lat=', document.getElementById('lat').textContent, document.getElementById('lon').textContent, document.getElementById('input2').value, document.getElementById('input3').value,  weaApiKey)
    .then( (APIarrWea) => {
        postGeoData('/weaadd', { Max:  APIarrWea[0], Min: APIarrWea[1] });
    })
  
    .then(function (){
        updateUIWea();
        })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getWeaApiData = async (apiURL, lat, lon, startDate, endDate, APIkey) => {
    const response = await fetch(apiURL + lat + '&lon=' + lon + '&start_date=' + startDate + '&end_date=' + endDate + '&key=' + APIkey) ;
    try {
        const webData = await response.json();
        max = webData.data[0].max_temp;
        min = webData.data[0].min_temp;

        const APIarrWea = [max, min];

        return APIarrWea;
      } 
      catch (error) {
        console.log("error", error);
    }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveWeaData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postWeaData = async ( url = '', data = {})=>{

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
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIWea = async () => {
    const request = await fetch('/weaall')
    try{
        const recweaRec = await request.json();
        console.log(recweaRec);
        document.getElementById('maxtemp').innerHTML =  'Predicted Highest Temperature: ' + Math.round((recweaRec.Max*1.8) + 32) + '&#8457;';
        document.getElementById('mintemp').innerHTML = 'Predicted Lowest Temperature: ' + Math.round((recweaRec.Min*1.8)  + 32) + '&#8457;';

      }catch(error){
        console.log("error",error)
    }
}

















//w3Sschool and Stack Overflow helped with the code and underestanding
const ApiKey = '8490583-5eb480e7a818afeeba4a92496';
// Create a new date instance dynamically with JS

//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function PerformAction(e) {

    // Friends helped with getting API data
    getApiData(ApiKey,  document.getElementById("place").textContent)
    .then( (pic) => {
        postData('/add', { Pic: pic });
    })
  
    .then(function (){
        updateUI();
        })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getApiData = async ( key, picImg ) => {
    const response = await fetch('https://pixabay.com/api/?key=' + key + '&q=' + picImg );
    try {
        const webData = await response.json();
        const pic = webData.data.hits[0].largeImageURL;
        return pic;
      } 
      catch (error) {
        console.log("error", error);
    }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
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
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const recRec = await request.json();
        console.log(recRec);
        document.getElementById('imagep').src =  recRec.Pic;

      }catch(error){
        console.log("error",error)
    }
}



document.getElementById('generate1').addEventListener('click', geoPerformAction);

document.getElementById('generate1').addEventListener('click', weaPerformAction);

document.getElementById('generate1').addEventListener('click', PerformAction);

