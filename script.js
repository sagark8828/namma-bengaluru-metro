function findRoute() {

    let from = document.getElementById("fromStation").value;
    let to = document.getElementById("toStation").value;

    if (from === "" || to === "") {
        document.getElementById("result").innerHTML =
            "Please enter both stations.";
        return;
    }

    document.getElementById("result").innerHTML =
        `<strong>Route:</strong> ${from} → ${to}<br><br>
         Route calculation will be added next.`;
}