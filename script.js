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

function findRoute() {

    let from = document.getElementById("fromStation").value;
    let to = document.getElementById("toStation").value;
    let result = document.getElementById("result");

    if (from === "" || to === "") {
        result.innerHTML = "Please select both stations.";
        return;
    }

    let fromIndex = purpleLine.indexOf(from);
    let toIndex = purpleLine.indexOf(to);

    if (fromIndex === -1 || toIndex === -1) {
        result.innerHTML = "Station not found.";
        return;
    }

    if (fromIndex === toIndex) {
        result.innerHTML = "From and To stations cannot be the same.";
        return;
    }

    let stationCount = Math.abs(fromIndex - toIndex);
    let estimatedTime = stationCount * 2;
    let estimatedDistance = stationCount * 1.2;

    let fare = 0;

    if (stationCount <= 1) {
        fare = 11;
    } else if (stationCount <= 2) {
        fare = 21;
    } else if (stationCount <= 3) {
        fare = 32;
    } else if (stationCount <= 5) {
        fare = 42;
    } else if (stationCount <= 10) {
        fare = 53;
    } else if (stationCount <= 15) {
        fare = 63;
    } else if (stationCount <= 20) {
        fare = 74;
    } else if (stationCount <= 25) {
        fare = 84;
    } else {
        fare = 95;
    }

    let start = Math.min(fromIndex, toIndex);
    let end = Math.max(fromIndex, toIndex);

    let routeText = purpleLine
        .slice(start, end + 1)
        .join(" → ");

    result.innerHTML =
        "<strong>Route:</strong><br>" +
        routeText +
        "<br><br>" +

        "<strong>Line:</strong> Purple Line<br>" +

        "<strong>Number of Stops:</strong> " +
        stationCount +
        "<br>" +

        "<strong>Estimated Distance:</strong> " +
        estimatedDistance.toFixed(1) +
        " km<br>" +

        "<strong>Estimated Journey Time:</strong> " +
        estimatedTime +
        " minutes<br><br>" +
        "<strong>Fare:</strong> ₹" +
        fare +
        "<br><br>" +
        "<strong>Route Status:</strong> Direct route";
}