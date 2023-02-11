const date = document.querySelector(".datebox #time");

function getTime(){
    const today = new Date();
    /*
    const year = String(today.getFullYear());
    const month = String(today.getMonth()+1).padStart(2,"0");
    const days = String(today.getDate()).padStart(2,"0");
    */
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");

    date.innerText = /*year+"."+ month+"."+days+*/
    hours +" : "+ minutes+" : "+ seconds;
}

getTime();
setInterval(getTime,1000);