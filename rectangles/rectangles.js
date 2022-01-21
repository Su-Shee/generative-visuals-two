$(document).ready( function () {

    let elem   = document.getElementById('draw-shapes');
    let params = { fullscreen: true };
    let two    = new Two(params).appendTo(elem);
    //let center = new Two.Vector(two.width/2, two.height/2);

    let width  = 20;
    let height = 20;

    createRectangle(two, width, height);

    two.update();
});

function createRectangle (two, width, height) {
    for (x = 20; x < 1200; x += 30) {
        for (y = 20; y < 800; y += 30) {
            let rectangle = two.makeRectangle(x, y, width, height);
            rectangle.fill = randomRGB(255);
            rectangle.stroke = 0;
        }
    }
}

function randomInt (max) {
    return Math.floor(Math.random() * max);
}

function randomRGB (max) {
    return "rgb(" + randomInt(max) + ","
                  + randomInt(150) + ","
                  + randomInt(150) + ")";
}











