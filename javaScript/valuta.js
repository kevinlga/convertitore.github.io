// tassi di scambio
const tassiCambio = {
    'EUR-USD': 1.05,
    'USD-EUR': 0.95,
    'EUR-GBP': 0.85,
    'GBP-EUR': 1.18,
    'EUR-JPY': 141.15,
    'JPY-EUR': 0.0071,
    'EUR-AUD': 1.60,
    'AUD-EUR': 0.625,
    'EUR-CAD': 1.45,
    'CAD-EUR': 0.69,
    'USD-GBP': 0.80,
    'GBP-USD': 1.25,
    'USD-JPY': 134.12,
    'JPY-USD': 0.0075,
    'USD-AUD': 1.52,
    'AUD-USD': 0.66,
    'USD-CAD': 1.38,
    'CAD-USD': 0.72,
    'GBP-JPY': 103.06,
    'JPY-GBP': 0.0094,
    'GBP-CAD': 1.26,
    'CAD-GBP': 0.80,
    'GBP-AUD': 1.37,
    'AUD-GBP': 0.71,
    'CAD-AUD': 1.31,
    'AUD-CAD': 0.75,
    'JPY-CAD': 111.91,
    'CAD-JPY': 0.0091,
    'JPY-AUD': 124.05,
    'AUD-JPY': 0.0083,
    'CAD-AUD': 116.26,
    'AUD-CAD': 0.79,
    'EUR-EUR': 1,
    'USD-USD': 1,
    'GBP-GBP': 1,
    'JPY-JPY': 1,
    'CAD-CAD': 1,
    'AUD-AUD': 1,
    
    
};



// Funzione per eseguire la conversione
function convertiValuta() 
{
    let valutaPartenza = document.getElementById('valutaPartenza').value;
    let valutaDestinazione = document.getElementById('valutaDestinazione').value;
    let importo = document.getElementById('importo').value;
    let tassoPersonalizzato = document.getElementById('tassoPersonalizzato').value;

    // Costruire la chiave per il tasso di cambio
    let chiaveTasso = `${valutaPartenza}-${valutaDestinazione}`;

    // Se l'utente ha inserito un tasso personalizzato, utilizzalo        
    let tasso = tassiCambio[chiaveTasso];
    let risultato = importo * tasso;
    document.getElementById('risultato').innerText = `Il risultato della conversione è: ${risultato.toFixed(2)} ${valutaDestinazione}`;
        
    
}