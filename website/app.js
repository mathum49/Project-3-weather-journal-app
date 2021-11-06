/* Global Variables */

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=826b52f705c6fbe6ede8364f24bc4af2';

// async GET + Update UI

  const getWeather = async (baseURL, zip, key)=>{
 
    const res = await fetch(baseURL+zip+key)
 
    try {

      const data = await res.json();
      console.log(data);
      console.log(data.name);

      let currentDate = new Date();

      let weatherData = {
        date: currentDate.toDateString(),
        city: data.name,
        country: data.sys.country,
        temp: data.main.feels_like,
        description: data.weather[0].description,
    };

    console.log(weatherData);
    console.log(weatherData.city);

    let titleInfo = `<h3>Your weather</h3>`
    let titleDiv = document.getElementById("title");
    titleDiv.innerHTML = titleInfo;

    let dateInfo = `<p> ${weatherData.date}</p>`
    let dateDiv = document.getElementById("date");
    dateDiv.innerHTML = dateInfo;

    let locationInfo = `<p> ${weatherData.city}, ${weatherData.country}</p>`
    let locationDiv = document.getElementById("location");
    locationDiv.innerHTML = locationInfo;

    let description = `<p> ${weatherData.description}, feels like: ${Math.floor(weatherData.temp)} &#8457 </p>`
    let descriptionDiv = document.getElementById("description");
    descriptionDiv.innerHTML = description;

    
  
    }  catch(error) {

    
    
      // appropriately handle the error
      console.log("error", error);
    }
  };


// on click launch function to get weather 

  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){
    const newZip =  document.getElementById('zip').value;
    let url = `${baseURL}${newZip}${apiKey}`;
    console.log (url);

    getWeather(baseURL,newZip, apiKey)
  

    .then(function(data){
  
        party.confetti(this);
    });
      
 
  }


  
//   ASYNC post data
  const postData = async (baseURL, zip, key, data = {}) => {

    const response = await fetch((baseURL+zip+key), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        return await response.json();
    } catch (error) {
        console.log("error", error);
    }
};


// END ---------------------------




















