console.log('BVG Dashboard script loaded');


fetch('https://v6.vbb.transport.rest/stops/900012104/departures?results=20')
    .then(res => res.json())
    .then(data => {

        const hLDepartures = data.departures.filter(dep => dep.direction.includes("Wittenbergplatz") || dep.direction.includes("Roseneck"));

        hLDepartures.forEach(dep => {
            const markup = `<p class="bd">${dep.direction} // ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} // in ${Math.round((new Date(dep.when) - new Date()) / 60000)} min</p>`; 
            document.querySelector('#h-l').insertAdjacentHTML("beforeend", markup);});


        const hRDepartures = data.departures.filter(dep => dep.direction.includes("Hermannplatz"));

        hRDepartures.forEach(dep => {
            const markup = `<p class="bd">${dep.direction} // ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} // in ${Math.round((new Date(dep.when) - new Date()) / 60000)} min</p>`; 
            document.querySelector('#h-r').insertAdjacentHTML("beforeend", markup);});


        const vUDepartures = data.departures.filter(dep => dep.direction.includes("Alex"));

        vUDepartures.forEach(dep => {
            const markup = `<p class="bd">${dep.direction} // ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} // in ${Math.round((new Date(dep.when) - new Date()) / 60000)} min</p>`; 
            document.querySelector('#v-u').insertAdjacentHTML("beforeend", markup);});


        const vDDepartures = data.departures.filter(dep => dep.direction.includes("kreuz"));

        vDDepartures.forEach(dep => {
            const markup = `<p class="bd">${dep.direction} // ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} // in ${Math.round((new Date(dep.when) - new Date()) / 60000)} min</p>`;  
            document.querySelector('#v-d').insertAdjacentHTML("beforeend", markup);});
    })

    .catch(error => console.log(error))


fetch('https://v6.vbb.transport.rest/stops/900012102/departures?results=5')
    .then(res => res.json())
    .then(data => {
        const u6Departures = data.departures.filter(dep => dep.line.name === "U6");

        u6Departures.forEach(dep => {
            const markup = `<p class="bd">${dep.direction} // ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} // in ${Math.round((new Date(dep.when) - new Date()) / 60000)} min</p>`; 
            document.querySelector('#station2').insertAdjacentHTML("beforeend", markup);
        });
    })
    // .then(data => {
    //     console.log(data);
    // })
    .catch(error => console.log(error))
