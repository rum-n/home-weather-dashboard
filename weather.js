function getWeather(woeid){
  fetch(`https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/${woeid}`, {
    mode: 'no-cors'
  })
  .then(response =>{
      console.log(response);
      return response.json;
  })
  .then((j)=>{
      console.log(j.currently.summary);
  })
  .catch( (err)=> {
    console.log('ERROR:', err.message);
  })
}

getWeather('42.697708,23.321867');