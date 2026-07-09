function enviarDados(nota) {
    // 🔥 COLA AQUI A URL DO SEU GOOGLE APPS SCRIPT 🔥
    const urlWebhook = "https://script.google.com/macros/s/AKfycbwuxwABRXCV3juwoRT1KXZ58gYVSxTueqMuu3Dn1Q9JA2ypyWQv0klh3yCpA3UakU7q/exec"; 
    
    const urlParams = new URLSearchParams(window.location.search);
    const sentimento = urlParams.get('sentimento');
    const evento = urlParams.get('evento');

    fetch(urlWebhook, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "evento": evento,
            "sentimento": sentimento,
            "nota": nota
        })
    }).then(() => {
        window.location.href = `agradecimento.html?evento=${encodeURIComponent(evento)}`;
    }).catch((erro) => {
        console.error("Erro:", erro);
        window.location.href = `agradecimento.html`;
    });
}
