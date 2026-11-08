// ======================================================
// NAMMA BENGALURU METRO
// ======================================================


// ===============================
// PURPLE LINE
// ===============================

const purpleLine = [

    "Whitefield (Kadugodi)",
    "Hopefarm Channasandra",
    "Kadugodi Tree Park",
    "Pattandur Agrahara",
    "Sri Sathya Sai Hospital",
    "Kundalahalli",
    "Seetharampalya",
    "Hoodi",
    "Garudacharpalya",
    "Singayyanapalya",
    "K.R. Pura (Krishnarajapura)",
    "Benniganahalli",
    "Baiyappanahalli",
    "Swami Vivekananda Road",
    "Indiranagar",
    "Halasuru",
    "Trinity",
    "M.G. Road",
    "Cubbon Park",
    "Vidhana Soudha / Dr. B.R. Ambedkar Station",
    "Sir M. Visvesvaraya Station / Central College",
    "Nadaprabhu Kempegowda Station / Majestic",
    "KSR Bengaluru City Railway Station",
    "Magadi Road",
    "Sri Balagangadharanatha Swamiji Station / Hosahalli",
    "Vijayanagara",
    "Govindaraja Nagar",
    "Attiguppe",
    "Deepanjali Nagar",
    "Mysuru Road",
    "Pantharapalya / Nayandahalli",
    "Rajarajeshwari Nagar",
    "Jnanabharathi",
    "Pattanagere",
    "Kengeri Bus Terminal",
    "Kengeri",
    "Challaghatta"

];


// ===============================
// GREEN LINE
// ===============================

const greenLine = [

    "Madavara (BIEC)",
    "Chikkabidarakallu",
    "Manjunathanagara",
    "Nagasandra",
    "Dasarahalli",
    "Jalahalli",
    "Peenya Industry",
    "Peenya (Future Orange Line Interchange)",
    "Goraguntepalya",
    "Yeshwanthpur (Connects to Yesvantpur Jn Railway Station)",
    "Sandal Soap Factory",
    "Mahalakshmi",
    "Rajajinagar",
    "Mahakavi Kuvempu Road",
    "Srirampura",
    "Mantri Square Sampige Road",
    "Nadaprabhu Kempegowda Station / Majestic",
    "Chickpete",
    "Krishna Rajendra Market (KR Market)",
    "National College",
    "Lalbagh",
    "South End Circle",
    "Jayanagara",
    "Rashtreeya Vidyalaya Road (RV Road)",
    "Banashankari",
    "Jaya Prakash Nagar (JP Nagar)",
    "Yelachenahalli",
    "Konanakunte Cross",
    "Doddakallasandra",
    "Vajarahalli",
    "Thalaghattapura",
    "Silk Institute (Southern Terminus)"

];


// ===============================
// YELLOW LINE
// ===============================

const yellowLine = [

    "Rashtreeya Vidyalaya Road (RV Road)",
    "Ragigudda",
    "Jayadeva Hospital (Interchange for Pink Line)",
    "BTM Layout",
    "Central Silk Board (Interchange for Blue Line / Outer Ring Road Line)",
    "Bommanahalli",
    "Hongasandra",
    "Kudlu Gate",
    "Singasandra",
    "Hosa Road",
    "Beratena Agrahara",
    "Electronic City Phase 1",
    "Electronic City Phase 2",
    "Huskur Road",
    "Hebbagodi",
    "Bommasandra (Terminus)"

];

const stationCoordinates = {

    // =========================
    // PURPLE LINE
    // =========================

    "Whitefield (Kadugodi)": {
        lat: 12.995699,
        lng: 77.757730
    },

    "Hopefarm Channasandra": {
        lat: 12.987288,
        lng: 77.753629
    },

    "Kadugodi Tree Park": {
        lat: 12.985649,
        lng: 77.746494
    },

    "Pattandur Agrahara": {
        lat: 12.987593,
        lng: 77.737740
    },

    "Sri Sathya Sai Hospital": {
        lat: 12.981164,
        lng: 77.727343
    },

    "Kundalahalli": {
        lat: 12.977654,
        lng: 77.715580
    },

    "Seetharampalya": {
        lat: 12.981166,
        lng: 77.708692
    },

    "Hoodi": {
        lat: 12.988861,
        lng: 77.711246
    },

    "Garudacharpalya": {
        lat: 12.993565,
        lng: 77.703542
    },

    "Singayyanapalya": {
        lat: 12.996618,
        lng: 77.692363
    },

    "K.R. Pura (Krishnarajapura)": {
        lat: 13.000109,
        lng: 77.677621
    },

    "Benniganahalli": {
        lat: 12.996388,
        lng: 77.668180
    },

    "Baiyappanahalli": {
        lat: 12.990554,
        lng: 77.652859
    },

    "Swami Vivekananda Road": {
        lat: 12.986017,
        lng: 77.644813
    },

    "Indiranagar": {
        lat: 12.978176,
        lng: 77.638332
    },

    "Halasuru": {
        lat: 12.976462,
        lng: 77.625994
    },

    "Trinity": {
        lat: 12.972944,
        lng: 77.616713
    },

    "M.G. Road": {
        lat: 12.975662,
        lng: 77.606757
    },

    "Cubbon Park": {
        lat: 12.980973,
        lng: 77.597315
    },

    "Vidhana Soudha / Dr. B.R. Ambedkar Station": {
        lat: 12.979865,
        lng: 77.592723
    },

    "Sir M. Visvesvaraya Station / Central College": {
        lat: 12.974168,
        lng: 77.584287
    },

    "Nadaprabhu Kempegowda Station / Majestic": {
        lat: 12.975590,
        lng: 77.573129
    },

    "KSR Bengaluru City Railway Station": {
        lat: 12.976008,
        lng: 77.565834
    },

    "Magadi Road": {
        lat: 12.975506,
        lng: 77.555448
    },

    "Sri Balagangadharanatha Swamiji Station / Hosahalli": {
        lat: 12.974126,
        lng: 77.545192
    },

    "Vijayanagara": {
        lat: 12.970907,
        lng: 77.537209
    },

    "Govindaraja Nagar": {
        lat: 12.965000,
        lng: 77.535000
    },

    "Attiguppe": {
        lat: 12.961915,
        lng: 77.533948
    },

    "Deepanjali Nagar": {
        lat: 12.952086,
        lng: 77.536824
    },

    "Mysuru Road": {
        lat: 12.946858,
        lng: 77.529828
    },

    "Pantharapalya / Nayandahalli": {
        lat: 12.941798,
        lng: 77.523476
    },

    "Rajarajeshwari Nagar": {
        lat: 12.936695,
        lng: 77.519185
    },

    "Jnanabharathi": {
        lat: 12.935315,
        lng: 77.510945
    },

    "Pattanagere": {
        lat: 12.924230,
        lng: 77.498242
    },

    "Kengeri Bus Terminal": {
        lat: 12.914693,
        lng: 77.487642
    },

    "Kengeri": {
        lat: 12.908001,
        lng: 77.476355
    },

    "Challaghatta": {
        lat: 12.897430,
        lng: 77.461109
    },


    // =========================
    // GREEN LINE
    // =========================

    "Madavara (BIEC)": {
        lat: 13.057306,
        lng: 77.472845
    },

    "Chikkabidarakallu": {
        lat: 13.052349,
        lng: 77.487821
    },

    "Manjunathanagara": {
        lat: 13.050310,
        lng: 77.494353
    },

    "Nagasandra": {
        lat: 13.048236,
        lng: 77.500163
    },

    "Dasarahalli": {
        lat: 13.043630,
        lng: 77.512325
    },

    "Jalahalli": {
        lat: 13.039833,
        lng: 77.519939
    },

    "Peenya Industry": {
        lat: 13.036458,
        lng: 77.525279
    },

    "Peenya (Future Orange Line Interchange)": {
        lat: 13.033118,
        lng: 77.533327
    },

    "Goraguntepalya": {
        lat: 13.028302,
        lng: 77.540833
    },

    "Yeshwanthpur (Connects to Yesvantpur Jn Railway Station)": {
        lat: 13.023274,
        lng: 77.549783
    },

    "Sandal Soap Factory": {
        lat: 13.014730,
        lng: 77.553933
    },

    "Mahalakshmi": {
        lat: 13.008261,
        lng: 77.549025
    },

    "Rajajinagar": {
        lat: 13.000384,
        lng: 77.549783
    },

    "Mahakavi Kuvempu Road": {
        lat: 12.998415,
        lng: 77.556784
    },

    "Srirampura": {
        lat: 12.996622,
        lng: 77.563424
    },

    "Mantri Square Sampige Road": {
        lat: 12.990328,
        lng: 77.570641
    },

    "Chickpete": {
        lat: 12.967492,
        lng: 77.574630
    },

    "Krishna Rajendra Market (KR Market)": {
        lat: 12.959932,
        lng: 77.574476
    },

    "National College": {
        lat: 12.950632,
        lng: 77.573609
    },

    "Lalbagh": {
        lat: 12.946255,
        lng: 77.579784
    },

    "South End Circle": {
        lat: 12.938446,
        lng: 77.579988
    },

    "Jayanagara": {
        lat: 12.929841,
        lng: 77.579886
    },

    "Rashtreeya Vidyalaya Road (RV Road)": {
        lat: 12.921683,
        lng: 77.580346
    },

    "Banashankari": {
        lat: 12.915614,
        lng: 77.573507
    },

    "Jaya Prakash Nagar (JP Nagar)": {
        lat: 12.907755,
        lng: 77.572945
    },

    "Yelachenahalli": {
        lat: 12.896263,
        lng: 77.569985
    },

    "Konanakunte Cross": {
        lat: 12.888801,
        lng: 77.562534
    },

    "Doddakallasandra": {
        lat: 12.884672,
        lng: 77.552838
    },

    "Vajarahalli": {
        lat: 12.877209,
        lng: 77.544620
    },

    "Thalaghattapura": {
        lat: 12.871288,
        lng: 77.538292
    },

    "Silk Institute (Southern Terminus)": {
        lat: 12.861885,
        lng: 77.529923
    },


    // =========================
    // YELLOW LINE
    // =========================

    "Ragigudda": {
        lat: 12.916937,
        lng: 77.588115
    },

    "Jayadeva Hospital (Interchange for Pink Line)": {
        lat: 12.916581,
        lng: 77.599809
    },

    "BTM Layout": {
        lat: 12.916393,
        lng: 77.608113
    },

    "Central Silk Board (Interchange for Blue Line / Outer Ring Road Line)": {
        lat: 12.916310,
        lng: 77.620409
    },

    "Bommanahalli": {
        lat: 12.910788,
        lng: 77.626395
    },

    "Hongasandra": {
        lat: 12.901564,
        lng: 77.632017
    },

    "Kudlu Gate": {
        lat: 12.889960,
        lng: 77.639392
    },

    "Singasandra": {
        lat: 12.880606,
        lng: 77.644597
    },

    "Hosa Road": {
        lat: 12.870955,
        lng: 77.652406
    },

    "Beratena Agrahara": {
        lat: 12.856277,
        lng: 77.663327
    },

    "Electronic City Phase 1": {
        lat: 12.856540,
        lng: 77.663284
    },

    "Electronic City Phase 2": {
        lat: 12.846265,
        lng: 77.671118
    },

    "Huskur Road": {
        lat: 12.838802,
        lng: 77.677447
    },

    "Hebbagodi": {
        lat: 12.828711,
        lng: 77.681240
    },

    "Bommasandra (Terminus)": {
        lat: 12.819555,
        lng: 77.688743
    }
};
function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


function findNearestStation(latitude, longitude) {

    let nearestStation = null;
    let shortestDistance = Infinity;

    for (const station in stationCoordinates) {

        const stationData = stationCoordinates[station];

        const distance = calculateDistance(
            latitude,
            longitude,
            stationData.lat,
            stationData.lng
        );

        if (distance < shortestDistance) {

            shortestDistance = distance;
            nearestStation = station;
        }
    }

    return {
        station: nearestStation,
        distance: shortestDistance
    };
}




// ======================================================
// ALL STATIONS
// ======================================================

const allStations = [
    ...new Set([
        ...purpleLine,
        ...greenLine,
        ...yellowLine
    ])
];


// ======================================================
// SMART SEARCH
// ======================================================

function setupStationSearch(inputId, suggestionId) {

    const input = document.getElementById(inputId);

    const suggestionBox =
        document.getElementById(suggestionId);


    input.addEventListener("input", function () {

        const search =
            input.value.toLowerCase().trim();


        suggestionBox.innerHTML = "";


        if (search === "") {
            return;
        }


        const matches = allStations.filter(function (station) {

            return station
                .toLowerCase()
                .includes(search);

        });


        matches.slice(0, 8).forEach(function (station) {

            const item =
                document.createElement("div");

            item.textContent = station;


            item.onclick = function () {

                input.value = station;

                suggestionBox.innerHTML = "";

                showStationDetails(inputId);

            };


            suggestionBox.appendChild(item);

        });

    });

}


// Activate search

setupStationSearch(
    "fromStation",
    "fromSuggestions"
);


setupStationSearch(
    "toStation",
    "toSuggestions"
);


// ======================================================
// STATION DETAILS
// ======================================================

function showStationDetails(inputId) {

    const station =
        document.getElementById(inputId).value;

    const details =
        document.getElementById("stationDetails");


    if (station === "") {

        details.innerHTML = "";

        return;

    }


    let line = "";


    if (
        purpleLine.includes(station) &&
        greenLine.includes(station)
    ) {

        line =
            "🟣 Purple Line + 🟢 Green Line";

    }

    else if (
        purpleLine.includes(station) &&
        yellowLine.includes(station)
    ) {

        line =
            "🟣 Purple Line + 🟡 Yellow Line";

    }

    else if (
        greenLine.includes(station) &&
        yellowLine.includes(station)
    ) {

        line =
            "🟢 Green Line + 🟡 Yellow Line";

    }

    else if (purpleLine.includes(station)) {

        line = "🟣 Purple Line";

    }

    else if (greenLine.includes(station)) {

        line = "🟢 Green Line";

    }

    else if (yellowLine.includes(station)) {

        line = "🟡 Yellow Line";

    }


    let type = "";


    if (line.includes("+")) {

        type = "🔄 Interchange Station";

    }

    else {

        type = "🚇 Metro Station";

    }


    details.innerHTML = `

        <div class="station-card">

            <h3>🚇 ${station}</h3>

            <p>
                <strong>Line:</strong>
                ${line}
            </p>

            <p>
                <strong>Type:</strong>
                ${type}
            </p>

        </div>

    `;

}


// ======================================================
// GET ROUTE
// ======================================================

function getRoute(line, from, to) {

    const start =
        line.indexOf(from);

    const end =
        line.indexOf(to);


    if (start === -1 || end === -1) {

        return [];

    }


    if (start <= end) {

        return line.slice(start, end + 1);

    }

    else {

        return line
            .slice(end, start + 1)
            .reverse();

    }

}


// ======================================================
// DISPLAY STATIONS
// ======================================================

function displayStations(stations) {

    let html = "";

    stations.forEach(function (station, index) {

        html += `
            <div>
                ${index + 1}. ${station}
            </div>
        `;

    });

    return html;

}


// ======================================================
// FIND ROUTE
// ======================================================

function findRoute() {

    const from =
        document.getElementById("fromStation").value.trim();

    const to =
        document.getElementById("toStation").value.trim();

    const result =
        document.getElementById("result");


    if (from === "" || to === "") {

        result.innerHTML = `
            <p>
                ⚠️ Please enter both stations.
            </p>
        `;

        return;

    }


    if (from === to) {

        result.innerHTML = `
            <h3>🚇 Same Station</h3>

            <p>
                From and To stations are the same.
            </p>
        `;

        return;

    }


    // ==================================================
    // PURPLE → YELLOW
    // ==================================================

    if (
        purpleLine.includes(from) &&
        yellowLine.includes(to)
    ) {

        const purpleRoute =
            getRoute(
                purpleLine,
                from,
                "Nadaprabhu Kempegowda Station / Majestic"
            );


        const greenRoute =
            getRoute(
                greenLine,
                "Nadaprabhu Kempegowda Station / Majestic",
                "Rashtreeya Vidyalaya Road (RV Road)"
            );


        const yellowRoute =
            getRoute(
                yellowLine,
                "Rashtreeya Vidyalaya Road (RV Road)",
                to
            );


        showThreeLineRoute(
            purpleRoute,
            greenRoute,
            yellowRoute
        );

        return;

    }


    // ==================================================
    // YELLOW → PURPLE
    // ==================================================

    if (
        yellowLine.includes(from) &&
        purpleLine.includes(to)
    ) {

        const yellowRoute =
            getRoute(
                yellowLine,
                from,
                "Rashtreeya Vidyalaya Road (RV Road)"
            );


        const greenRoute =
            getRoute(
                greenLine,
                "Rashtreeya Vidyalaya Road (RV Road)",
                "Nadaprabhu Kempegowda Station / Majestic"
            );


        const purpleRoute =
            getRoute(
                purpleLine,
                "Nadaprabhu Kempegowda Station / Majestic",
                to
            );


        showThreeLineRoute(
            yellowRoute,
            greenRoute,
            purpleRoute
        );

        return;

    }


    // ==================================================
    // PURPLE → GREEN
    // ==================================================

    if (
        purpleLine.includes(from) &&
        greenLine.includes(to)
    ) {

        const route =
            getRoute(
                purpleLine,
                from,
                "Nadaprabhu Kempegowda Station / Majestic"
            );


        const greenRoute =
            getRoute(
                greenLine,
                "Nadaprabhu Kempegowda Station / Majestic",
                to
            );


        showTwoLineRoute(
            route,
            greenRoute
        );

        return;

    }


    // ==================================================
    // GREEN → PURPLE
    // ==================================================

    if (
        greenLine.includes(from) &&
        purpleLine.includes(to)
    ) {

        const route =
            getRoute(
                greenLine,
                from,
                "Nadaprabhu Kempegowda Station / Majestic"
            );


        const purpleRoute =
            getRoute(
                purpleLine,
                "Nadaprabhu Kempegowda Station / Majestic",
                to
            );


        showTwoLineRoute(
            route,
            purpleRoute
        );

        return;

    }


    // ==================================================
    // GREEN → YELLOW
    // ==================================================

    if (
        greenLine.includes(from) &&
        yellowLine.includes(to)
    ) {

        const greenRoute =
            getRoute(
                greenLine,
                from,
                "Rashtreeya Vidyalaya Road (RV Road)"
            );


        const yellowRoute =
            getRoute(
                yellowLine,
                "Rashtreeya Vidyalaya Road (RV Road)",
                to
            );


        showTwoLineRoute(
            greenRoute,
            yellowRoute
        );

        return;

    }


    // ==================================================
    // YELLOW → GREEN
    // ==================================================

    if (
        yellowLine.includes(from) &&
        greenLine.includes(to)
    ) {

        const yellowRoute =
            getRoute(
                yellowLine,
                from,
                "Rashtreeya Vidyalaya Road (RV Road)"
            );


        const greenRoute =
            getRoute(
                greenLine,
                "Rashtreeya Vidyalaya Road (RV Road)",
                to
            );


        showTwoLineRoute(
            yellowRoute,
            greenRoute
        );

        return;

    }


    // ==================================================
    // SAME LINE
    // ==================================================

    if (purpleLine.includes(from) &&
        purpleLine.includes(to)) {

        showSingleLineRoute(
            getRoute(purpleLine, from, to),
            "🟣 Purple Line"
        );

        return;

    }


    if (greenLine.includes(from) &&
        greenLine.includes(to)) {

        showSingleLineRoute(
            getRoute(greenLine, from, to),
            "🟢 Green Line"
        );

        return;

    }


    if (yellowLine.includes(from) &&
        yellowLine.includes(to)) {

        showSingleLineRoute(
            getRoute(yellowLine, from, to),
            "🟡 Yellow Line"
        );

        return;

    }


    result.innerHTML = `
        <p>
            ❌ Route not found.
        </p>
    `;

}


// ======================================================
// SINGLE LINE ROUTE
// ======================================================

function showSingleLineRoute(route, lineName) {

    const result =
        document.getElementById("result");


    const stationCount =
        route.length - 1;


    result.innerHTML = `

        <h3>${lineName}</h3>

        <p>
            <strong>Route:</strong>
        </p>

        ${displayStations(route)}

        <hr>

        <p>
            💺 Stations: ${stationCount}
        </p>

        <p>
            📏 Distance: ${(stationCount * 1.2).toFixed(1)} km
        </p>

        <p>
            ⏱️ Estimated Time:
            ${stationCount * 2} minutes
        </p>

        <p>
            💰 Estimated Fare:
            ₹${calculateFare(stationCount)}
        </p>

    `;

}


// ======================================================
// TWO LINE ROUTE
// ======================================================

function showTwoLineRoute(route1, route2) {

    const result =
        document.getElementById("result");


    const combined =
        [...route1, ...route2.slice(1)];


    const stationCount =
        combined.length - 1;


    result.innerHTML = `

        <h3>🚇 Metro Route</h3>

        <h4>First Line</h4>

        ${displayStations(route1)}

        <p>
            🔄
            <strong>
                Interchange at:
                ${route1[route1.length - 1]}
            </strong>
        </p>

        <h4>Second Line</h4>

        ${displayStations(route2)}

        <hr>

        <p>
            💺 Stations:
            ${stationCount}
        </p>

        <p>
            📏 Distance:
            ${(stationCount * 1.2).toFixed(1)} km
        </p>

        <p>
            ⏱️ Estimated Time:
            ${stationCount * 2} minutes
        </p>

        <p>
            💰 Estimated Fare:
            ₹${calculateFare(stationCount)}
        </p>

    `;

}


// ======================================================
// THREE LINE ROUTE
// ======================================================

function showThreeLineRoute(
    route1,
    route2,
    route3
) {

    const result =
        document.getElementById("result");


    const combined = [

        ...route1,

        ...route2.slice(1),

        ...route3.slice(1)

    ];


    const stationCount =
        combined.length - 1;


    result.innerHTML = `

        <h3>🚇 Metro Route</h3>


        <h4>First Line</h4>

        ${displayStations(route1)}


        <p>
            🔄
            <strong>
                Interchange at:
                ${route1[route1.length - 1]}
            </strong>
        </p>


        <h4>Second Line</h4>

        ${displayStations(route2)}


        <p>
            🔄
            <strong>
                Interchange at:
                ${route2[route2.length - 1]}
            </strong>
        </p>


        <h4>Third Line</h4>

        ${displayStations(route3)}


        <hr>


        <p>
            💺 Stations:
            ${stationCount}
        </p>


        <p>
            📏 Distance:
            ${(stationCount * 1.2).toFixed(1)} km
        </p>


        <p>
            ⏱️ Estimated Time:
            ${stationCount * 2} minutes
        </p>


        <p>
            💰 Estimated Fare:
            ₹${calculateFare(stationCount)}
        </p>

    `;

}


// ======================================================
// FARE CALCULATOR
// ======================================================

function calculateFare(stations) {

    if (stations <= 1) {

        return 11;

    }

    else if (stations <= 2) {

        return 21;

    }

    else if (stations <= 3) {

        return 32;

    }

    else if (stations <= 5) {

        return 42;

    }

    else if (stations <= 10) {

        return 53;

    }

    else if (stations <= 15) {

        return 63;

    }

    else if (stations <= 20) {

        return 74;

    }

    else if (stations <= 25) {

        return 84;

    }

    else {

        return 95;

    }

}

// ===============================
// COMPLETE METRO MAP
// ===============================

function createMetroMap(containerId, lineName, stations, trackClass, circleClass) {

    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    let html = `
        <div class="map-title">
            ${lineName}
        </div>

        <div class="station-track">
    `;

    stations.forEach(function(station, index) {

        let interchange = false;

        if (
            station === "Nadaprabhu Kempegowda Station / Majestic" &&
            (lineName.includes("Purple") || lineName.includes("Green"))
        ) {
            interchange = true;
        }

        if (
            station === "Rashtreeya Vidyalaya Road (RV Road)" &&
            (lineName.includes("Green") || lineName.includes("Yellow"))
        ) {
            interchange = true;
        }

        html += `
            <div class="station-node"
                 onclick="showMapStationDetails('${station.replace(/'/g, "\\'")}')"
                 style="cursor: pointer;">

                <div class="station-circle ${circleClass}"></div>

                <div class="station-name">
                    ${station}
                </div>

                ${interchange ? `
                    <div class="interchange-label">
                        🔄 Interchange
                    </div>
                ` : ""}

            </div>
        `;

        if (index < stations.length - 1) {
            html += `
                <div class="station-connector ${trackClass}"></div>
            `;
        }
    });

    html += `
        </div>
    `;

    container.innerHTML = html;
}


// Create Purple Map
createMetroMap(
    "purpleMap",
    "🟣 Purple Line",
    purpleLine,
    "purple-track",
    "purple-circle"
);


// Create Green Map
createMetroMap(
    "greenMap",
    "🟢 Green Line",
    greenLine,
    "green-track",
    "green-circle"
);


// Create Yellow Map
createMetroMap(
    "yellowMap",
    "🟡 Yellow Line",
    yellowLine,
    "yellow-track",
    "yellow-circle"
);



function showMapStationDetails(station) {

    let lines = [];
    let lineHTML = "";

    if (purpleLine.includes(station)) {
        lines.push("Purple Line");

        lineHTML += `
            <span class="line-badge purple-badge">
                ● Purple Line
            </span>
        `;
    }

    if (greenLine.includes(station)) {
        lines.push("Green Line");

        lineHTML += `
            <span class="line-badge green-badge">
                ● Green Line
            </span>
        `;
    }

    if (yellowLine.includes(station)) {
        lines.push("Yellow Line");

        lineHTML += `
            <span class="line-badge yellow-badge">
                ● Yellow Line
            </span>
        `;
    }

    let type = lines.length > 1
        ? "🔄 Interchange Station"
        : "🚇 Metro Station";

    document.getElementById("popupContent").innerHTML = `

        <h3>🚇 ${station}</h3>

        <p>
            <strong>Line:</strong>
        </p>

        <div>
            ${lineHTML}
        </div>

        <p>
            <strong>Type:</strong> ${type}
        </p>

    `;

    document.getElementById("stationPopup").style.display = "block";
}


function closeStationPopup() {

    document.getElementById("stationPopup").style.display = "none";

}
document.getElementById("swapButton").addEventListener("click", function () {

    const fromInput = document.getElementById("fromStation");
    const toInput = document.getElementById("toStation");

    const temp = fromInput.value;

    fromInput.value = toInput.value;
    toInput.value = temp;

    document.getElementById("fromSuggestions").innerHTML = "";
    document.getElementById("toSuggestions").innerHTML = "";

    document.getElementById("stationDetails").innerHTML = "";
    document.getElementById("result").innerHTML = "";

});
document.getElementById("clearButton").addEventListener("click", function () {

    document.getElementById("fromStation").value = "";
    document.getElementById("toStation").value = "";

    document.getElementById("fromSuggestions").innerHTML = "";
    document.getElementById("toSuggestions").innerHTML = "";

    document.getElementById("stationDetails").innerHTML = "";
    document.getElementById("result").innerHTML = "";

});
document.getElementById("locationButton").addEventListener("click", function () {

    const output = document.getElementById("nearestStation");

    if (!navigator.geolocation) {
        output.innerHTML = `
            <div class="station-card">
                ❌ Location is not supported by your browser.
            </div>
        `;
        return;
    }

    output.innerHTML = `
        <div class="station-card">
            📍 Finding your location...
        </div>
    `;

    navigator.geolocation.getCurrentPosition(
        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const nearest = findNearestStation(
    latitude,
    longitude
);

output.innerHTML = `
    <div class="station-card">

        <h3>🚇 Nearest Metro Station</h3>

        <p>
            <strong>Station:</strong>
            ${nearest.station}
        </p>

        <p>
            <strong>Approx. Distance:</strong>
            ${nearest.distance.toFixed(2)} km
        </p>

    </div>
`;

        },

        function () {

            output.innerHTML = `
                <div class="station-card">
                    ❌ Location permission denied.
                    <br><br>
                    Please allow location access.
                </div>
            `;
        }
    );

});

function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}
function findNearestStation(latitude, longitude) {

    let nearestStation = null;
    let shortestDistance = Infinity;

    for (const station in stationCoordinates) {

        const stationData = stationCoordinates[station];

        const distance = calculateDistance(
            latitude,
            longitude,
            stationData.lat,
            stationData.lng
        );

        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestStation = station;
        }
    }

    return {
        station: nearestStation,
        distance: shortestDistance
    };
}