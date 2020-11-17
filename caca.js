if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 350);

}

var x = 0;

var titleText = ["H", "HA", "HAR", "HARA", "HARAM", "HARAMB", "HARAMBE", "HARAMB", "HARAM", "HARA", "HAR",  "HA", "H"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}