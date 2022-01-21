$(document).ready( function () {

    let elem   = document.getElementById('draw-shapes');
    let params = { fullscreen: true };
    let two    = new Two(params).appendTo(elem);
    //let center = new Two.Vector(two.width/2, two.height/2);

    let initx = 20;
    let inity = 100;

    createLine(two, initx, inity);
    createLine(two, initx, inity+50);
    createLine(two, initx, inity+30);

    two.update();
});

function createLine (two, initx, inity) {
    for (x = 0; x < 1200; x += 10) {

        y = randomInt(150);

        let line = two.makeLine(x, y, initx, inity);

        line.stroke = '#ffffff';
        line.linewidth = 1;
        initx = x;
        inity = y;
    }
}

function randomInt (max) {
    return Math.floor(Math.random() * max);
}

function randomRGB (max) {
    return "rgb(" + randomInt(max) + ","
                  + randomInt(max) + ","
                  + randomInt(max) + ")";
}











