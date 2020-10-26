$(document).ready(function () {

    function displayTime() {

        //Creates the moment instance to UTC time
        let time = moment.utc();
        time = moment.tz("Asia/Taipei");

        //Displays a formatted version of time inside the clock division
        document.getElementById('clock').innerText = time.format("h:mm:ss A");
    }
    // Runs the displayTime function the first time
    displayTime();

    // Runs the displayTime function every second.
    setInterval(displayTime, 500);
});