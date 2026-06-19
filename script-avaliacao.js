function enviarDados(nota) {
    // 🔥 COLA AQUI A URL DO SEU GOOGLE APPS SCRIPT 🔥
    const urlWebhook = "https://script.google.com/macros/s/AKfycbxL_QJbefuBjW-98jg1koOCXkutVqcSgFtxTkjMOIQ2giPPUacGVeg0YugzgMPNuHXE/exec"; 
    
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