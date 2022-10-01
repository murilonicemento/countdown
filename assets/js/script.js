const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

const cowntdownTime = "1 Jan 2023";

function cowntdown() {
    const cowntdown = new Date(cowntdownTime);
    const currentDate = new Date();
    const totalSenconds = (cowntdown - currentDate) / 1000;
    const day = Math.floor(totalSenconds / 3600 / 24);
    const hour = Math.floor(totalSenconds / 3600) %24;
    const minute = Math.floor(totalSenconds / 60) %60;
    const second = Math.floor(totalSenconds) %60;

    days.innerHTML = day;
    hours.innerHTML = formatTime(hour);
    minutes.innerHTML = formatTime(minute);
    seconds.innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

cowntdown();

setInterval(cowntdown, 1000);

