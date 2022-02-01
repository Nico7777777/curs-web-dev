function dormi( ms )
{
    console.log( "  ->dorm " + ms + "milisecunde..." );
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function intarziere()
{
    await dormi( 6000 );
}

start = Date.now();
alert("Test");

console.log("incep transformarea");
intarziere()

stop = Date.now();

console.log("Au trecut " + (Number(stop) - Number(start) ) + " milisecunde");

//-----------------------------------------------------
alert("Schimb culoare de fundal!");
var variabila_paragraf_simplu = document.getElementById("paragraf_simplu")
variabila_paragraf_simplu.style.background = "magenta";


let btn =  document.createElement( "button" );
btn.innerHTML = "Apasa pe mine!";

btn.style.backgroundColor = "cyan";
btn.style.margin = "0% 50% 0%";
/*btn.style.display = "flex";
btn.style.justifyContent = "center";*/

//-----------------------------------------------------
btn.addEventListener("click", function()
    {
        alert("M-ai apasat, bravo!");
        vallllloare = document.getElementById("zona1");
        vallllloare.style.background = "green";
    }
);
document.body.append(btn);