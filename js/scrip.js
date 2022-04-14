let monto= "";
let cuotas= "";
let iva=(1*40)/100;



// function cuota(cuotas){
    
    // }
    
function prestamo(){
    monto=parseInt(prompt("Ingrese monto"));
    while(monto > 500000){
        alert("Su monto excede su limite, el monto  no puede ser superior a $500000 ")
        monto=parseInt(prompt("Ingrese monto"));
    }
        // cuotas=parseInt(prompt("Cuotas"));
    cuotas=parseInt(prompt("Cuotas"));
    while(cuotas > 12){
        alert("Su cuota excede su limite, la cuota no puede ser mayor a 12 meses ")
        cuotas=parseInt(prompt("Cuotas"));
    }
    total= monto * iva
    total2 = total+ monto
    return "Su cuota final es de " +"$"+ Math.ceil(total2 / cuotas);
}
console.log(alert(prestamo()))
// console.log(alert(cuota(cuotas)))