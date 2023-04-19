function dong_ho() {
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');

    var date = new Date();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();

    hour.innerHTML = gio;
    minute.innerHTML = phut;
    second.innerHTML = giay;
}

var dem_gio = setInterval(dong_ho, 1000);