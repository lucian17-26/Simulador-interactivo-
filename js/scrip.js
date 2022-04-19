
let usuario=prompt("Ingrese Nombre y Apellido");
let monto= "";
let cuotas= "";
let iva=(1*40)/100;
const datos=[];



function cantidad(){
    monto=parseInt(prompt("Ingrese monto"));
    while(monto > 500000){
        alert("Su monto excede su limite, el monto  no puede ser superior a $500000 ")
        monto=parseInt(prompt("Ingrese monto"));
    }
    return monto
}
function cuota(){
    cuotas=parseInt(prompt("Cuotas"));
    while(cuotas > 12){
        alert("Su cuota excede su limite, la cuota no puede ser mayor a 12 meses ")
        cuotas=parseInt(prompt("Cuotas"));
    }
    return cuotas
}
function salida(){
    total= iva * monto
    total2 = total+ monto
    return "Su cuota final es de " +"$"+ Math.ceil(total2 / cuotas);
}

console.log(cantidad())
console.log(cuota())
console.log(alert(salida()))

class Clientes{
    constructor(usuario,cuotas,monto){
        this.cliente=usuario;
        this.plazo=cuotas;
        this.cantidad=monto;
    }
}
let cliente1 = new Clientes(usuario,cuotas,monto) 
let cliente2 = new Clientes("Luis Alfonzo",12,80000) 
datos.push(cliente1)
datos.push(cliente2)

console.log(datos)


