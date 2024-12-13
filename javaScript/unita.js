// Funzione per eseguire la conversione delle unità
function convertiUnita()
{
    let partenza = document.getElementById("unitaPartenza").value;
    let arrivo = document.getElementById("unitaDestinazione").value;
    let numero = document.getElementById("valore").value
    let pesoArrivo = peso(arrivo);
    let pesoPartenza = peso(partenza);
    let risultato = numero * (pesoPartenza / pesoArrivo);
    document.getElementById("risultatoUnita").innerHTML = 'Il risultato della conversione è: '  + risultato + " " + arrivo;
}
function peso(tipo)
{
    let peso;

    if(tipo == "km")peso = 1000
    else if(tipo == "hm")peso = 100
    else if(tipo == "dam")peso = 10
    else if(tipo == "m")peso = 1
    else if(tipo == "dm")peso = 0.1
    else if(tipo == "cm")peso = 0.01
    else if(tipo == "mm")peso = 0.001
    return peso;
}