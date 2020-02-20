window.addEventListener('load', ()=> {
    
    //Temperature color formatting based on weather conditions
    const tempColor = function(temp){
        if (temp <= 0){
            return '#00CCFF';
        }
        else {
            return '#FAA41A';
        }
    };

    // Weather information for the current location (now set to Sofia)
    (function currentLocation(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.697708,23.321867?units=si`;
        const tempDesc = document.querySelector('.temp-description');
        const tempDegree = document.querySelector('.temp-degree');

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
            tempDegree.style.color = tempColor(temperature);
            setIcons(icon, document.querySelector('.icon'));
        })

        function setIcons (icon, iconID){
            const skycons = new Skycons({ color:'black' });
            const currentIcon = icon.replace(/-/g, '_').toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[currentIcon]);
        }
    })();

    // Weather cards for the locations where I go to ski in Bulgaria
    (function vitosha(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.582537,23.292406?units=si`;
        const vitoshaTemp = document.querySelector('.vitTemp');
        const vitoshaWind = document.querySelector('.vitWind');
        const vitoshaSnow = document.querySelector('.vitSnow');
        const vitoshaRain = document.querySelector('.vitRain');
        const vitoshaSum = document.querySelector('.vitSum');
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                vitoshaTemp.textContent = Math.round(temperature) + ' °C';
                vitoshaSum.textContent = summary;
                vitoshaTemp.style.color = tempColor(temperature);
                vitoshaWind.textContent = Math.round(windSpeed) + ' m/s';
                vitoshaRain.textContent = Math.round(precipProbability * 100) + ' %';
                vitoshaSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function rila(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.239547,23.325955?units=si`;
        const rilaTemp = document.querySelector('.rilTemp');
        const rilaWind = document.querySelector('.rilWind');
        const rilaRain = document.querySelector('.rilRain');
        const rilaSnow = document.querySelector('.rilSnow');
        const rilaSum = document.querySelector('.rilSum');

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                rilaTemp.textContent = Math.round(temperature) + ' °C';
                rilaSum.textContent = summary;
                rilaTemp.style.color = tempColor(temperature);
                rilaWind.textContent = Math.round(windSpeed) + ' m/s';
                rilaRain.textContent = Math.round(precipProbability * 100) + ' %';
                rilaSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function borovets(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.263937,23.606649?units=si`;
        const boroTemp = document.querySelector('.boroTemp');
        const boroWind = document.querySelector('.boroWind');
        const boroRain = document.querySelector('.boroRain');
        const boroSnow = document.querySelector('.boroSnow');
        const boroSum = document.querySelector('.boroSum');

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                boroTemp.textContent = Math.round(temperature) + ' °C';
                boroSum.textContent = summary;
                boroTemp.style.color = tempColor(temperature);
                boroWind.textContent = Math.round(windSpeed) + ' m/s';
                boroRain.textContent = Math.round(precipProbability * 100) + ' %';
                boroSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function bezbog(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/41.758308,23.545210?units=si`;
        const bezbTemp = document.querySelector('.bezbogTemp');
        const bezbWind = document.querySelector('.bezbogWind');
        const bezbRain = document.querySelector('.bezbogRain');
        const bezbSnow = document.querySelector('.bezbogSnow');
        const bezbSum = document.querySelector('.bezbogSum');

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                bezbTemp.textContent = Math.round(temperature) + ' °C';
                bezbSum.textContent = summary;
                bezbTemp.style.color = tempColor(temperature);
                bezbWind.textContent = Math.round(windSpeed) + ' m/s';
                bezbRain.textContent = Math.round(precipProbability * 100) + ' %';
                bezbSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function pampo(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/41.645401,24.686185?units=si`;
        const pampoTemp = document.querySelector('.pampoTemp');
        const pampoWind = document.querySelector('.pampoWind');
        const pampoRain = document.querySelector('.pampoRain');
        const pampoSnow = document.querySelector('.pampoSnow');
        const pampoSum = document.querySelector('.pampoSum');

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                pampoTemp.textContent = Math.round(temperature) + ' °C';
                pampoSum.textContent = summary;
                pampoTemp.style.color = tempColor(temperature);
                pampoWind.textContent = Math.round(windSpeed) + ' m/s';
                pampoRain.textContent = Math.round(precipProbability * 100) + ' %';
                pampoSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();

    (function bansko(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/41.803349,23.469249?units=si`;
        const banskoTemp = document.querySelector('.banskoTemp');
        const banskoWind = document.querySelector('.banskoWind');
        const banskoRain = document.querySelector('.banskoRain');
        const banskoSnow = document.querySelector('.banskoSnow');
        const banskoSum = document.querySelector('.banskoSum');

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, windSpeed, precipProbability} = data.currently;
                const {precipAccumulation} = data.daily.data[0];
                banskoTemp.textContent = Math.round(temperature) + ' °C';
                banskoSum.textContent = summary;
                banskoTemp.style.color = tempColor(temperature);
                banskoWind.textContent = Math.round(windSpeed) + ' m/s';
                banskoRain.textContent = Math.round(precipProbability * 100) + ' %';
                banskoSnow.textContent = Math.round(precipAccumulation) + ' cm';
            });
    })();
});

