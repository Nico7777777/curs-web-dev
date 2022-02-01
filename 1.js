alert( "Pregatire animatii." );

const canvas1 = document.getElementById( "canvas1" );
const ctx = canvas1.getContext( "2d" );
canvas1.style.background = "#D3D3D3";

function deseneaza_patrat( x, y )
{
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo( x + 50, y + 50 );
	ctx.lineTo( x + 50, y + 100 );
	ctx.lineTo( x + 100, y + 100 );
	//ctx.closePath();
	ctx.stroke();

	ctx.strokeStyle = "red";
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo( x + 100, y + 100 );
	ctx.lineTo( x + 100, y + 50 );
	ctx.lineTo( x + 50, y + 50 );
	//ctx.closePath();
	ctx.stroke();

}


let nr = 1;
let btn = document.createElement( "button" );
btn.innerHTML = "Deseneaza patrat.";
btn.addEventListener( "click", function()
								{
									let x = Math.random() * 400;
									let y = Math.random() * 300;
									deseneaza_patrat( x, y );
									console.log( nr );
									nr = nr + 1;
								}
);

document.body.appendChild( btn );

let btn1 = document.createElement( "button" );
btn1.innerHTML = "Animeaza patrat.";
btn1.style.background = "yellow";
let y = 200;
let x = 50;
btn1.addEventListener( "click", function()
								{
									x = x + 10;
									ctx.clearRect( 0, 0, innerWidth, innerHeight );
									deseneaza_patrat( x, y );
									
								}
);

document.body.appendChild( btn1 );


////
function deseneaza_cerc(x, y, raza)
{
	ctx.strokeStyle = "darkmagenta";
	ctx.fillStyle = "forestgreen";
	ctx.lineWidth = 3;
	
	ctx.beginPath();
	ctx.arc( x, y, raza, 0, Math.PI );
	ctx.stroke();//cercul efectiv sau "conturul"
	ctx.fill();//interiorul cercului
	
	
	ctx.fillStyle = "yellow";
	ctx.beginPath();
	ctx.arc(x, y, raza, Math.PI, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
}
//deseneaza_cerc(100, 200, 60);

function dormi( ms )
{
	return new Promise( intarziere => setTimeout(intarziere, ms) );
}

x = 50; y = 130;
let raza = 20, vit = 4, sens = 1;

async function ani1( ms, st, dr )
{
	let i = 0;
	while( 1 > 0 )
	{
		await dormi( ms );
		ctx.clearRect(0, 0, innerWidth, innerHeight);
		deseneaza_cerc( x, y, raza );
		x = x + vit;
		if( x + raza >= dr )
			vit *= -1;
		if( x - raza <= st )
			vit *= -1;
		console.log( "Am desenat cercul la coordonatele: " + x + ", " + y );
		
	}
}

//ani1( 30, 0, 350 );

function ani1_automat()
{
	let dr = 400, st = 10; //, sens2 = 1;
	requestAnimationFrame( ani1_automat );
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	deseneaza_cerc( x, y, raza );
	
	if( x + raza >= dr )
		sens = -1;
	if( x - raza <= st )
		sens = 1;
	
	x = x + sens*vit;
	
}
ani1_automat();


const coordonate = (event)=>{
	const container = canvas1.getBoundingClientRect();
	const x_click = event.clientX;
	const y_click = event.clientY;

	if( x_click >= x - raza && x_click <= x + raza &&
		y_click >= y - raza && y_click <= y + raza)
			alert("Ai castigat");
}
canvas1.addEventListener("click", coordonate)
