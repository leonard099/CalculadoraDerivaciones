//CALENDARIO
//Construccion de un calendario anual
var calendarioTot = [];
var Dia = {Fecha: new Date('2024-01-01'),Tipo:0}
calendarioTot.push(Dia)
var d = 1;
while (d<=365) {
    d++;
    a = Dia.Fecha.getTime() + (24 * 60 * 60 * 1000);
    x = new Date(a)
    y = x.getDay();
     
    Dia = {Fecha:x, Tipo:y,}
    calendarioTot.push(Dia)
};
//Correccion del caleblndario quitando sabado, domingo y feriados
for (let i = 0; i < calendarioTot.length; i++) {
    const obj = calendarioTot[i];
    
    if (obj.Tipo==5||obj.Tipo==6) {
        //quita sabado y domingo
        delete calendarioTot[i]
    } else if ((obj.Fecha).toISOString()=="2024-01-01T00:00:00.000Z"){
        //quita Feriados
        delete calendarioTot[i]
    } else if ((obj.Fecha).toISOString()=="2024-02-12T00:00:00.000Z"){
        //quita Feriados
        delete calendarioTot[i]
    } else if ((obj.Fecha).toISOString()=='2024-02-13T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    } else if ((obj.Fecha).toISOString()=='2024-03-28T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-03-29T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-04-01T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-04-02T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-05-01T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-06-20T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-06-21T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-07-09T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-10-11T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-11-18T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-12-24T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-12-25T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }else if ((obj.Fecha).toISOString()=='2024-12-31T00:00:00.000Z'){
        //quita Feriados
        delete calendarioTot[i]
    }
}
calendarioCorregido= calendarioTot.filter((x)=> x!==undefined)
//Copio el calendario por que despues nececito cortar uno
var calendarioCorrCoomple = calendarioCorregido.slice();

//BIBLIOTECA DE DETERMINACIONES 
//Creacion de determinacion: Se ubicaran en un arr que contiene todas las deribacion como objetos
var Derivaciones =[{NBU:412, Det:"Glucemia", DiasLabMed:2},]

document.getElementById("Formulario").addEventListener("submit", AlClick);
//FUNCION
function AlClick(event){ event.preventDefault();
//Entra la determinacion y tengo que dar con los dias que se tarda en ser procesada
var Det = parseInt(document.getElementById("determinacion").value);
var i = Derivaciones.findIndex((x)=>x.NBU == Det);
var SumLabMed = (Derivaciones[i]).DiasLabMed;
//Entra la fecha en que se tomo la muestra y se devuelve los dias que se tarda en ser enviada a Lab de Medicina
var FechaDeMuestra =  (document.getElementById("fechaTomaMuestra").value);
var FechaDeMuestraISO = FechaDeMuestra + 'T00:00:00.000Z';
var idederivacion = calendarioCorregido.findIndex((x)=>(x.Fecha).toISOString() == FechaDeMuestraISO);
var calendarioParticular = calendarioCorregido.splice(idederivacion,).filter((x)=> x.Tipo==0||x.Tipo==2||x.Tipo==3)

if (FechaDeMuestraISO == '2024-07-08T00:00:00.000Z'){
    indexXDer = calendarioParticular.findIndex((x)=>(x.Fecha).toISOString() == '2024-07-11T00:00:00.000Z');
} else if (FechaDeMuestraISO == '2024-09-10T00:00:00.000Z'){
    indexXDer = calendarioParticular.findIndex((x)=>(x.Fecha).toISOString() == '2024-09-16T00:00:00.000Z');
} else if (FechaDeMuestraISO == '2024-11-15T00:00:00.000Z'){
    indexXDer = calendarioParticular.findIndex((x)=>(x.Fecha).toISOString() == '2024-11-20T00:00:00.000Z');
} else if (FechaDeMuestraISO == '2024-12-23T00:00:00.000Z'){
    indexXDer = calendarioParticular.findIndex((x)=>(x.Fecha).toISOString() == '2024-12-26T00:00:00.000Z');
} else if (calendarioCorrCoomple[idederivacion].Tipo == 0) {
    indexXDer = 1
} else if (calendarioCorrCoomple[idederivacion].Tipo == 1){
    indexXDer = 1
} else if (calendarioCorrCoomple[idederivacion].Tipo == 2){
    indexXDer = 2
} else if (calendarioCorrCoomple[idederivacion].Tipo == 3){
    indexXDer = 1
} else if (calendarioCorrCoomple[idederivacion].Tipo == 4){
    indexXDer = 1
}

//Al index en el que se Dereivo la muestra le debo sumar  los dias que se demoran en procesarlo
var FechaDeEnvio = (calendarioParticular[indexXDer].Fecha).toISOString();
var indexdeDechadeEnvio = calendarioCorrCoomple.findIndex((x)=>(x.Fecha).toISOString() == FechaDeEnvio);
var IndexDeDiaDeEntrega = indexdeDechadeEnvio + SumLabMed;
var resultado =  calendarioCorrCoomple[IndexDeDiaDeEntrega].Fecha;
var resultadoString = resultado.toISOString();
var resultadoCorregido = resultadoString.split('').slice(0,10).join('');
var resultadoFinal = (Derivaciones[i]).Det + ": " + resultadoCorregido;
document.getElementById("resultado").textContent = resultadoFinal;
event.target.reset();
} 
