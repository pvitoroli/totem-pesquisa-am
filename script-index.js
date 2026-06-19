function escolherSentimento(sentimentoEscolhido) {
    // Pega o nome do evento que já está na URL
    const urlParams = new URLSearchParams(window.location.search);
    const evento = urlParams.get('evento') || "Ação ArcelorMittal";
    
    // Redireciona para a tela de avaliação levando os dados na URL
    window.location.href = `avaliacao.html?evento=${encodeURIComponent(evento)}&sentimento=${encodeURIComponent(sentimentoEscolhido)}`;
}

// Injeção automática do nome do evento no cabeçalho
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const evento = urlParams.get('evento') || "Ação ArcelorMittal";
    document.getElementById('nome-campanha-ativa').innerText = evento;
};