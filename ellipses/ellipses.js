$(document).ready( function () {

    let elem   = document.getElementById('draw-shapes');
    let params = { fullscreen: true };
    let two    = new Two(params).appendTo(elem);
    let center = new Two.Vector(two.width/2, two.height/2);

    let width  = 1000;
    let height = 800;

    for (rad = 0; rad < 2*Math.PI; rad += Math.PI/10) {
        let ellipse = two.makeEllipse(center.x, center.y, height/16, width/4);

        ellipse.fill     = randomRGB(255);
        ellipse.stroke   = 0;
        ellipse.opacity  = 0.3;
        ellipse.rotation = rad;

        ellipse.translation.set(center.x, center.y);
    }

    two.update();

});

function randomInt (max) {
    return Math.floor(Math.random() * max);
}

function randomRGB (max) {
    return "rgb(" + randomInt(max) + ","
                  + randomInt(max) + ","
                  + randomInt(max) + ")";
}












