function showDate () {
    let date = new Date ();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 11;
        session = "PM";
    }
        h = ( h < 10) ? `0${h}` : h;
        m = ( m < 10) ? `0${m}` : m;
        s = ( s < 10) ? `0${s}` : s;


        let seconds = `${s}`;   
        let minutets = `${m}`;
        let hours = `${h}`;
        let sessions = `${session}`;


        document.querySelector(".seconds").innerHTML = seconds;
        document.querySelector(".minutes").innerHTML = minutets;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".am").innerHTML = sessions;



}
setInterval(showDate, 1000);



















