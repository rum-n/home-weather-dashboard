window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDesc = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let locationTz = document.querySelector('.location-tz');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com';
            const api = `${proxy}/https://api.darksky.net/forecast/7bac0ec31ccb6313d3c1db5e94c867fd/${lat},${long}?units=si`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary, icon} = data.currently;
                tempDegree.textContent = Math.round(temperature);
                tempDesc.textContent = summary;
                locationTz.textContent = data.timezone;

                setIcons(icon, document.querySelector('.icon'));
            });
        });
    } else {
        prompt("You must enable your geolocation for the app to determine your local weather.")
    };

    function setIcons (icon, iconID) {
        const skycons = new Skycons({ color:'white' });
        const currentIcon = icon.replace(/-/g, '_').toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
