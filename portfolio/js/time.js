const dodo = document.querySelector(".datebox #date");
const year = document.querySelector(".datebox #year");

function getDate() {
    const tototo = new Date();

    const year = String(tototo.getFullYear());

    let month = String(tototo.getMonth() + 1).padStart(2, "0");
    if (month == 1) {
        month = "Jan"
    } else if (month == 2) {
        month = "Feb"
    } else if (month == 3) {
        month = "Mar"
    } else if (month == 4) {
        month = "Apr"
    } else if (month == 5) {
        month = "May"
    } else if (month == 6) {
        month = "Jun"
    } else if (month == 7) {
        month = "Jul"
    } else if (month == 8) {
        month = "Aug"
    } else if (month == 9) {
        month = "Sep"
    } else if (month == 10) {
        month = "Oct"
    } else if (month == 11) {
        month = "Nov"
    } else if (month == 12) {
        month = "Dec"
    } else {
        mohth = "NO"
    }

    const days = String(tototo.getDate()).padStart(2, "0");
    let day = tototo.getDay();
    console.log(day);

    if (day == 0) {
        day = "Sun"
    } else if (day == 1) {
        day = "Mon"
    } else if (day == 2) {
        day = "Tue"
    } else if (day == 3) {
        day = "Wed"
    } else if (day == 4) {
        day = "Thu"
    } else if (day == 5) {
        day = "Fri"
    } else if (day == 6) {
        day = "Sat"
    } else {
        day = "X"
    }


    dodo.innerText = day + " " + days + " " + month + " ";
}

function getYear() {
    const toto = new Date();

    const years = String(toto.getFullYear());

    year.innerText = years;
}
getYear();
getDate();