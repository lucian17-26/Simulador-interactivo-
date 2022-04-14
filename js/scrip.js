let monto= "";
let cuotas= "";
let iva=(1*40)/100;

monto=parseInt(prompt("Ingrese monto"));
cuotas=parseInt(prompt("Cuotas"));

// function cuota(cuotas){
    
// }

function prestamo(monto,cuotas){
    while(cuotas > 12){
        alert("Su cuota excede su limite, la cuota no puede ser mayor a 12 meses ")
        cuotas=parseInt(prompt("Cuotas"));
    }
    total= monto * iva
    total2 = total+ monto
    return "Su cuota final es de " +"$"+ Math.ceil(total2 / cuotas);
}
console.log(alert(prestamo(monto,cuotas)))
// console.log(alert(cuota(cuotas)))