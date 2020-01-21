window.addEventListener('load', ()=> {
    // Declaring variables for the weather information that will change, 
    // based on the data received from the Darksky API
    const tempDesc = document.querySelector('.temp-description');
    const tempDegree = document.querySelector('.temp-degree');

    const vitoshaTemp = document.querySelector('.vitTemp');
    const vitoshaWind = document.querySelector('.vitWind');
    const vitoshaSnow = document.querySelector('.vitSnow');
    const vitoshaRain = document.querySelector('.vitRain');
    const vitoshaSum = document.querySelector('.vitSum');

    const rilaTemp = document.querySelector('.rilTemp');
    const rilaWind = document.querySelector('.rilWind');
    const rilaRain = document.querySelector('.rilRain');
    const rilaSnow = document.querySelector('.rilSnow');
    const rilaSum = document.querySelector('.rilSum');

    const boroTemp = document.querySelector('.boroTemp');
    const boroWind = document.querySelector('.boroWind');
    const boroRain = document.querySelector('.boroRain');
    const boroSnow = document.querySelector('.boroSnow');
    const boroSum = document.querySelector('.boroSum');

    const bezbTemp = document.querySelector('.bezbogTemp');
    const bezbWind = document.querySelector('.bezbogWind');
    const bezbRain = document.querySelector('.bezbogRain');
    const bezbSnow = document.querySelector('.bezbogSnow');
    const bezbSum = document.querySelector('.bezbogSum');

    const pampoTemp = document.querySelector('.pampoTemp');
    const pampoWind = document.querySelector('.pampoWind');
    const pampoRain = document.querySelector('.pampoRain');
    const pampoSnow = document.querySelector('.pampoSnow');
    const pampoSum = document.querySelector('.pampoSum');

    const banskoTemp = document.querySelector('.banskoTemp');
    const banskoWind = document.querySelector('.banskoWind');
    const banskoRain = document.querySelector('.banskoRain');
    const banskoSnow = document.querySelector('.banskoSnow');
    const banskoSum = document.querySelector('.banskoSum');

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
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                vitoshaTemp.textContent = Math.round(temperature) + ' °C';
                vitoshaSum.textContent = summary;
                vitoshaWind.textContent = Math.round(windSpeed) + ' m/s';
                vitoshaRain.textContent = `${precipProbability * 100} %`;
                vitoshaSnow.textContent = Math.round(precipAccumulation) + ' cm';
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
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                rilaTemp.textContent = Math.round(temperature) + ' °C';
                rilaSum.textContent = summary;
                rilaWind.textContent = windSpeed + ' m/s';
                rilaRain.textContent = `${precipProbability * 100} %`;
                rilaSnow.textContent = Math.round(precipAccumulation) + ' cm';
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
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                boroTemp.textContent = Math.round(temperature) + ' °C';
                boroSum.textContent = summary;
                boroWind.textContent = windSpeed + ' m/s';
                boroRain.textContent = `${precipProbability * 100} %`; 
                boroSnow.textContent = Math.round(precipAccumulation) + ' cm';
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
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                bezbTemp.textContent = Math.round(temperature) + ' °C';
                bezbSum.textContent = summary;
                bezbWind.textContent = windSpeed + ' m/s';
                bezbRain.textContent = `${precipProbability * 100} %`;
                bezbSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function pampo(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/41.645401,24.686185?units=si`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                pampoTemp.textContent = Math.round(temperature) + ' °C';
                pampoSum.textContent = summary;
                pampoWind.textContent = windSpeed + ' m/s';
                pampoRain.textContent = `${precipProbability * 100} %`;
                pampoSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function bansko(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/41.803349,23.469249?units=si`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                banskoTemp.textContent = Math.round(temperature) + ' °C';
                banskoSum.textContent = summary;
                banskoWind.textContent = windSpeed + ' m/s';
                banskoRain.textContent = `${precipProbability * 100} %`;
                banskoSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    //Temperature color formatting based on weather conditions
    // TO-DO: Refactor this so it follows the DRY principle!
    
    (function() {        
        if (tempDegree.textContent <= 0) {
            tempDegree.style.color = '#00CCFF'; 
        } 
        else {
            tempDegree.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (bezbTemp <= 0) {
            bezbTemp.style.color = '#00CCFF'; 
        } else {
            bezbTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (boroTemp <= 0) {
            boroTemp.style.color = '#00CCFF'; 
        } else {
            boroTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (rilaTemp <= 0) {
            rilaTemp.style.color = '#00CCFF'; 
        } else {
            rilaTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (vitoshaTemp <= 0) {
            vitoshaTemp.style.color = '#00CCFF'; 
        } else {
            vitoshaTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (pampoTemp <= 0) {
            pampoTemp.style.color = '#00CCFF'; 
        } else {
            pampoTemp.style.color = '#FAA41A';
        }
    })();

    (function() {        
        if (banskoTemp <= 0) {
            banskoTemp.style.color = '#00CCFF'; 
        } else {
            banskoTemp.style.color = '#FAA41A';
        }
    })();
});


