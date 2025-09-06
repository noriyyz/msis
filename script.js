document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao-acessibilidade');
    const opcoes = document.getElementById('opcoes-acessibilidade');
    const body = document.body;
    
    let tamanhoFonte = 1; // inicial em rem

    // Toggle menu de opções
    botao.addEventListener('click', () => {
        opcoes.classList.toggle('mostra');
    });

    // Aumentar fonte
    document.getElementById('aumentar-fonte').addEventListener('click', () => {
        tamanhoFonte += 0.1;
        body.style.fontSize = `${tamanhoFonte}rem`;
    });

    // Diminuir fonte
    document.getElementById('diminuir-fonte').addEventListener('click', () => {
        tamanhoFonte -= 0.1;
        if(tamanhoFonte < 0.5) tamanhoFonte = 0.5;
        body.style.fontSize = `${tamanhoFonte}rem`;
    });

    // **Ativar/desativar modo contraste**
    const botaoContraste = document.getElementById('modo-escuro'); // botão no HTML
    botaoContraste.addEventListener('click', () => {
        body.classList.toggle('alto-contraste'); // CSS já existente
    });

    // ScrollReveal
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#machado', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});
