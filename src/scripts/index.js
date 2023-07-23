const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    }
}

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

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.update(ctx);

    // handle player movement
    if(keys.w.pressed){
        player.velocity.y = -1;
    } else if(keys.s.pressed){
        player.velocity.y = 1;
    } else {
        player.velocity.y = 0;
    }

    if(keys.a.pressed){
        player.velocity.x = -1;
    } else if(keys.d.pressed){
        player.velocity.x = 1;
    } else {
        player.velocity.x = 0;
    }
}
animate();

window.addEventListener('keydown', ({key}) => {
    switch(key){
        case 'w':
            keys.w.pressed = true;
            break;
        case 's':
            keys.s.pressed = true;
            break;
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd':
            keys.d.pressed = true;
            break;
    }
})

window.addEventListener('keyup', ({key}) => {
    switch(key){
        case 'w':
            keys.w.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
})