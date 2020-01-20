window.addEventListener('load', ()=> {
    // Declaring variables for the weather information that will change, 
    // based on the data received from the Darksky API
    const tempDesc = document.querySelector('.temp-description');
    const tempDegree = document.querySelector('.temp-degree');
    const locationTz = document.querySelector('.location-tz');

    const vitoshaTemp = document.querySelector('.vitTemp');
    const vitoshaWind = document.querySelector('.vitWind');
    let vitoshaRain = document.querySelector('.vitRain');
    let vitoshaSum = document.querySelector('.vitSum');

    let rilaTemp = document.querySelector('.rilTemp');
    let rilaWind = document.querySelector('.rilWind');
    let rilaRain = document.querySelector('.rilRain');
    let rilaSum = document.querySelector('.rilSum');

    let boroTemp = document.querySelector('.boroTemp');
    let boroWind = document.querySelector('.boroWind');
    let boroRain = document.querySelector('.boroRain');
    let boroSum = document.querySelector('.boroSum');

    let bezbTemp = document.querySelector('.bezbogTemp');
    let bezbWind = document.querySelector('.bezbogWind');
    let bezbRain = document.querySelector('.bezbogRain');
    let bezbSum = document.querySelector('.bezbogSum');

    // Weather information for the current location (now set to Sofia)
    (function currentLocation(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.697708,23.321867?units=si`;
        
        let icon = new Skycons({ 
            color: '#222'
        })

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperature, summary, icon} = data.currently;
            tempDegree.textContent = Math.round(temperature) + '°C';
            tempDesc.textContent = summary;
            setIcons(icon, document.querySelector('.icon'));
            // icon.set('.icon', data.icon);
            // icon.play();
        })

        function setIcons (icon, iconID){
            const skycons = new Skycons({ color:'black' });
            const currentIcon = icon.replace(/-/g, '_').toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[currentIcon]);
        }
    })();

    // setIcons(icon, document.querySelector('.icon'));

    // Start of the weather cards for the places where I go to ski in Bulgaria
    (function vitosha(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.582537,23.292406?units=si`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                vitoshaTemp.textContent = Math.round(temperature) + ' °C';
                vitoshaSum.textContent = summary;
                vitoshaWind.textContent = windSpeed + ' m/s';
                vitoshaRain.textContent = `${precipProbability * 100} %`;
            });
    })();

    (function rila(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.239547,23.325955?units=si`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                rilaTemp.textContent = Math.round(temperature) + ' °C';
                rilaSum.textContent = summary;
                rilaWind.textContent = windSpeed + ' m/s';
                rilaRain.textContent = `${precipProbability * 100} %`;
            });
    })();

    (function borovets(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.263937,23.606649?units=si`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                boroTemp.textContent = Math.round(temperature) + ' °C';
                boroSum.textContent = summary;
                boroWind.textContent = windSpeed + ' m/s';
                boroRain.textContent = `${precipProbability * 100} %`; 
            });
    })();

    (function bezbog(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/41.758308,23.545210?units=si`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                bezbTemp.textContent = Math.round(temperature) + ' °C';
                bezbSum.textContent = summary;
                bezbWind.textContent = windSpeed + ' m/s';
                bezbRain.textContent = `${precipProbability * 100} %`;
            });
    })();

    //Temperature color formatting based on weather conditions
    // TO-DO: Refactor this so it follows the DRY principle!
    
    (function() {        
        if (tempDegree.textContent <= 0) {
            tempDegree.style.color = '#00CCFF'; 
        } else {
            tempDegree.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (bezbTemp.textContent <= 0) {
            bezbTemp.style.color = '#00CCFF'; 
        } else {
            bezbTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (boroTemp.textContent <= 0) {
            boroTemp.style.color = '#00CCFF'; 
        } else {
            boroTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (rilaTemp.textContent <= 0) {
            rilaTemp.style.color = '#00CCFF'; 
        } else {
            rilaTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (vitoshaTemp.textContent <= 0) {
            vitoshaTemp.style.color = '#00CCFF'; 
        } else {
            vitoshaTemp.style.color = '#FAA41A';
        }
    })();
});


