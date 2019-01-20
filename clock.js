const clock = document.getElementById('clock');

function getDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() %12;
    const time = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    return time;

}

clock.innerHTML = getDate();

setInterval(function() {
    clock.innerHTML=getDate();
}, 1000);
