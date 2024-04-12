const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// El canvas tendrá las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

// Color de fondo del canvas
canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radius, color, text) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // Corrección aquí
        context.lineWidth = 4;
        context.strokeStyle = this.color;
        context.stroke();
        context.fillStyle = 'black'; // Color del texto
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.x, this.y);
        context.closePath();
    }
}


let arrayCircle = [];

for (let i = 0; i < 10; i++) {

let randomX = Math.random()*window_width;
let randomY = Math.random()*window_height;
let randomR = Math.floor(Math.random()*100+30);

    let miCirculo = new Circle(randomX, randomY, randomR,'blue', (i+1));
   // Agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);
}

// let miCirculo = new Circle(100, 100, 50, 'blue','tec');
// miCirculo.draw(ctx);

// let miCirculo2 = new Circle(270, 270, 50, 'black','pachuca');
// miCirculo2.draw(ctx);

