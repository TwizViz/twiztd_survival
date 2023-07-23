const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: 0,
            y: 0
        };
    }

    update(context){
        this.draw(context);
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        context.fill();
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 20, 'blue');
player.draw(ctx);