class Star{
    constructor() {
        this.x = random(-width/2, width/2);
        this.y = random(-height/2, height/2);
        this.z = random(width);
        this.r = random(0, 256);
        this.g = random(0, 256);
        this.b = random(0, 256);
        this.pz = this.z;
    }

    update(){
        this.z = this.z - speed;
        if ( this.z < 1){
            this.z = width;
            this.x = random(-width/2, width/2);
            this.y = random(-height/2, height/2);
            this.r = random(0, 256);
            this.g = random(0, 256);
            this.b = random(0, 256);
            this.pz = this.z;      
        }
    }

    show(){
        fill(this.r, this.g, this.b)
        noStroke()
        let sx = map(this.x/this.z, 0, 1, 0, width);
        let sy = map(this.y/this.z, 0, 1, 0, height);
        let rd = map(this.z, 0, width, 12, 0)
        ellipse(sx, sy, rd, rd);
        let px = map(this.x/this.pz, 0, 1, 0, width);
        let py = map(this.y/this.pz, 0, 1, 0, height);

        this.pz = this.z;

        stroke(this.r, this.g, this.b);
        // strokeWeight(this.r/100);
        line(px, py, sx, sy);

    }
}