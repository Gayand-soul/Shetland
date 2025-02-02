
//Snow animation se här.

const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

cnv.width = (window.innerWidth * 75)/100;
cnv.height = (window.innerHeight * 75)/100;
ctx.fillStyle = "#fff";

class Drop {
    constructor (){
        this.x = Math.random() * cnv.width;
        this.y = Math.random() * cnv.height;
        this.r = Math.random() * 2.5; //perfekta flingsradie.
        this.v = Math.random() * 0.5; //perfekta flinstorlek
    }

    make() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        this.y += this.v;
        if(this.y > cnv.height){
            this.x = Math.random() * cnv.width;
            this.y = 0;
        }
    }

}

let drops = [];
for (let i = 0; i<750; i++){
    drops.push(new Drop());
}

function animation () {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drops.forEach((drop) => {
    drop.make()});
    requestAnimationFrame(animation);
}

animation();


