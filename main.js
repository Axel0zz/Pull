import{division, multiplicacion, suma, resta, residuo, mayor, par, impar, del } from "./operaciones.js"


var res=document.getElementById("res");
var Calcular=document.getElementById("Suma");

Calcular.onclick=()=>{
let a=parseInt(document.getElementById("n1").value);
let b=parseInt(document.getElementById("n2").value);
res.innerHTML=`<h1>Suma: ${suma(a,b)}</h1>
<h1>Resta: ${resta(a,b)}</h1>
<h1>Division: ${division(a,b)}</h1>
<h1>Multiplicacion: ${multiplicacion(a,b)}</h1>
<h1>Residuo: ${residuo(a,b)}</h1>
<h1>mayor: ${mayor(a,b)}</h1>
<h1> ${par(a,b)}</h1>
<h1> ${impar(a,b)}</h1>`;
}
var Borrar=document.getElementById("Borrar");
Borrar.onclick=()=>{
    let a=document.getElementById("n1");
    let b=document.getElementById("n2");

    del(a,b,res);
}