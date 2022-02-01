alert("Suste, vrajeala, sanchi, alea alea");

const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");

canvas1.style.background =  "#D3D3D3";

function colorare( x, y ){
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo( x+50, y+50 );
	ctx.lineTo( x+50, y+50 );
	ctx.closePath();
	ctx.stroke();


	ctx.strokeStyle = "green";
	ctx.beginPath();
	ctx.moveTo( x+100, x+100 );
	ctx.lineTo( x+100, y+50 );
	ctx.closePath();
	ctx.stroke();

	ctx.strokeStyle = "magenta";
	ctx.beginPath();
	ctx.moveTo( x+50, y+50 );
	ctx.lineTo( x+100, y+50 );
	ctx.closePath();
	ctx.stroke();

	ctx.strokeStyle = "cyan";
	ctx.beginPath();
	ctx.moveTo( x+50, y+100 );
	ctx.lineTo( x+100, y+100 );
	ctx.closePath();
	ctx.stroke();
}

const btn = document.getElementById("button");
btn.innerHTML = "Deseneaza patrat!";
let y = 200;
let x = 50;

btn.addEventListener("click", function()
		{
			x += 10;
			colorare(x, y);
		}
);
document.body.appendChild( btn );
