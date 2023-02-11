const dutyForm = document.querySelector("#duty-form");
const dutyInput = document.querySelector("#duty-form input");
const dutyList = document.querySelector("#duty-list");

const DUTY_KEY = "duty";

let dutyArray = [];

function dutySave() {
    localStorage.setItem(DUTY_KEY, JSON.stringify(dutyArray));
}

function dutyDelete(event) {
    const li = event.target.parentElement;
    dutyArray = dutyArray.filter(duty => duty.id != parseInt(li.id));
    li.remove();
    dutySave();
}

function dutyDisplay(newDutyObj) {

    const li = document.createElement("li");
    li.id = newDutyObj.id;
    const span = document.createElement("span");
    span.innerText = newDutyObj.text;
    span.classList.add("spanstyle");
    const button = document.createElement("button");
    button.innerText = '➖';
    button.classList.add("buttonstyle");
    button.addEventListener("click", dutyDelete);
    li.appendChild(button);
    li.appendChild(span);

    dutyList.appendChild(li);


}


function dutySubmit(event) {
    event.preventDefault();
    const newDuty = dutyInput.value;
    dutyInput.value = "";
    const newDutyObj = {
        text: newDuty,
        id: Date.now(),
    };
    dutyArray.push(newDutyObj);
    //console.log(newDutyObj.text);
    dutyDisplay(newDutyObj);
    dutySave();

}

dutyForm.addEventListener("submit", dutySubmit);

const dutyStorage = localStorage.getItem(DUTY_KEY);

if (dutyStorage !== null) {
    const parseDuty = JSON.parse(dutyStorage);
    dutyArray = parseDuty;
    parseDuty.forEach(dutyDisplay);
}