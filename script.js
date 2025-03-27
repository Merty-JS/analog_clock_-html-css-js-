const second = document.getElementById('second');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees =((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    min.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hour.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate,100);
setDate();