function savePreferences(){

    const username =
        document.getElementById("username").value;

    const checked =
        document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

    let preferences = [];

    checked.forEach(item => {

        preferences.push(item.value);

    });

    if(username === ""){

        alert("Please enter your name");

        return;
    }

    if(preferences.length === 0){

        alert("Select at least one interest");

        return;
    }

    showRecommendedEvents(preferences);

    alert(
        "Welcome " + username +
        "! Here are your recommended events."
    );
}


function showRecommendedEvents(preferences){

    const container =
        document.getElementById("events-container");

    container.innerHTML = "";

    const filteredEvents =
        events.filter(event =>
            preferences.includes(event.category)
        );

    if(filteredEvents.length === 0){

        container.innerHTML =
            "<p>No events found.</p>";

        return;
    }

    filteredEvents.forEach(event => {

        container.innerHTML += `

            <div class="event-card">

                <h3>${event.name}</h3>

                <p>
                    <strong>Category:</strong>
                    ${event.category}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${event.location}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${event.date}
                </p>

                <p>
                    ${event.description}
                </p>

            </div>

        `;
    });

}


function initMap(){

    const map = L.map('map').setView(
        [-32.8895, -68.8458],
        10
    );

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
            '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);

    events.forEach(event => {

        L.marker([event.lat, event.lng])

        .addTo(map)

        .bindPopup(
            `
            <h3>${event.name}</h3>
            <p>${event.location}</p>
            <p>${event.date}</p>
            `
        );

    });

}

window.onload = initMap;