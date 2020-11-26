let stars = [];
let speed

function setup(){
    let cnv = createCanvas(600, 400);
    cnv.parent('board')
    for(let i=0; i<300; i++){
        star= new Star();
        stars.push(star)
    }
}

function draw(){
    background(0);
    if (mouseX <= width && mouseX >= 0){
        speed = map(mouseX, 0, width, 0, 30)
    }
    translate(width/2, height/2)
    for (let i = 0; i < stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
}

