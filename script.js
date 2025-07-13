console.log('BVG Dashboard script loaded');


fetch('https://v6.vbb.transport.rest/stops/900012104/departures?results=5')
    .then(res => res.json())
    .then(data => {
    
        data.departures.forEach(dep => {
            const markup = `<li>Line Name: ${dep.line.name} // Direction: ${dep.direction} // Time: ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</li>`; 
            document.querySelector('#station1').insertAdjacentHTML("beforeend", markup);
        });
    })
    // .then(data => {
    //     console.log(data);
    // })
    .catch(error => console.log(error))


fetch('https://v6.vbb.transport.rest/stops/900012102/departures?results=5')
    .then(res => res.json())
    .then(data => {
        const u6Departures = data.departures.filter(dep => dep.line.name === "U6");

        u6Departures.forEach(dep => {
            const markup = `<li>Line Name: ${dep.line.name} // Direction: ${dep.direction} // Time: ${new Date(dep.when).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</li>`; 
            document.querySelector('#station2').insertAdjacentHTML("beforeend", markup);
        });
    })
    // .then(data => {
    //     console.log(data);
    // })
    .catch(error => console.log(error))
