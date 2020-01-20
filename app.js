window.addEventListener('load', ()=> {
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


    function setIcons (icon, iconID) {
        const skycons = new Skycons({ color:'white' });
        const currentIcon = icon.replace(/-/g, '_').toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

    (function currentLocation(){
        const proxy = 'https://cors-anywhere.herokuapp.com';
        const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/42.697708,23.321867?units=si`;

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperature, summary, icon} = data.currently;
            tempDegree.textContent = Math.round(temperature);
            tempDesc.textContent = summary;

            setIcons(icon, document.querySelector('.icon'));
        });
    })();

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
                vitoshaTemp.textContent = Math.round(temperature);
                vitoshaSum.textContent = summary;
                vitoshaWind.textContent = windSpeed;
                vitoshaRain.textContent = precipProbability;
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
                rilaTemp.textContent = Math.round(temperature);
                rilaSum.textContent = summary;
                rilaWind.textContent = windSpeed;
                rilaRain.textContent = precipProbability;
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
                boroTemp.textContent = Math.round(temperature);
                boroSum.textContent = summary;
                boroWind.textContent = windSpeed;
                boroRain.textContent = precipProbability;
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
                bezbTemp.textContent = Math.round(temperature);
                bezbSum.textContent = summary;
                bezbWind.textContent = windSpeed;
                bezbRain.textContent = precipProbability;
             });
    })();
});
