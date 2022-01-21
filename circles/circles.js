$(document).ready( function () {

    let elem   = document.getElementById('draw-shapes');
    let params = { fullscreen: true };
    let two    = new Two(params).appendTo(elem);
    let center = new Two.Vector(two.width/2, two.height/2);

    for (rad = 0; rad < 2*Math.PI; rad += Math.PI/20) {
        let circ1 = two.makeCircle(center.x, center.y, 20);
        let circ2 = two.makeCircle(center.x + 10, center.y, 15);
        let circ3 = two.makeCircle(center.x - 10, center.y, 30);

        circ1.fill     = randomRGB(255);
        circ1.stroke   = 0;
        circ1.opacity  = 0.5;

        circ2.fill     = randomRGB(255);
        circ2.stroke   = 0;
        circ2.opacity  = 0.7;

        circ3.fill     = randomRGB(255);
        circ3.stroke   = 0;
        circ3.opacity  = 0.6;

        circ1.translation.x += Math.cos(rad) * 100;
        circ1.translation.y += Math.sin(rad) * 100;

        circ2.translation.x += Math.cos(rad) * 200;
        circ2.translation.y += Math.sin(rad) * 200;

        circ3.translation.x += Math.cos(rad) * 300;
        circ3.translation.y += Math.sin(rad) * 300;
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














