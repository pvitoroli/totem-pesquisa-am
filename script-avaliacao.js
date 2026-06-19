function enviarDados(nota) {
    // 🔥 COLA AQUI A URL DO SEU GOOGLE APPS SCRIPT 🔥
    const urlWebhook = "https://script.google.com/macros/s/AKfycbzQDIltRr5fah169bC6xcL34kVHtc0pvX-7TZAQC7LXPSRaGKQHlf31tu2jIcaJC98V/exec"; 
    
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
