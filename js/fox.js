function foxOnClick(logo) {
    var angle = 1;
    var interval = setInterval(function () {
        logo.style.transform = "rotate(" + 10 * angle++ + "deg)";

        if (angle > 36)
            clearInterval(interval);
    }, 10);


}