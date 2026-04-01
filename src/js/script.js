//dom da pesquisa
const input = document.getElementById("pesquisar")
const cards = document.querySelectorAll(".card")

input.addEventListener("input", () =>  {
    const valor = input.value.toLowerCase()

    cards.forEach(card => {
        const titulo = card.querySelector("h3").innerText.toLocaleLowerCase()

        if (titulo.includes(valor)) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
})

//descrições dos animes
const descricoes = {
    "Dragon ball Z": "historia sobre superação amizade e luta para proteger o universo.",
    "Attack on Titan": "E uma historia intensa sobre sobrevivencia, liberdade e verdades escondidas.",
    "Jujutsu Kaisen": "Uma historia sobre batalhas contra maldições, poder oculto e sacrificios.",
    "Demon Slayer": "Uma historia emocionante sobre familia, superação e lutas contra demonios.",
    "The Fragrant Flower": "Uma historia sobre primeiro amor, superação de julgamentos e crescimento pessoal, com um clima mais calmo, emocional e realista.",
    "Your Name": "Uma historia sobre amor a distancia, destino e laços que vão além do tempo, com um toque de misterio e fantasia.",
    "Ponyo": "Uma historia sobre amizade, amor puro e repeito a natureza, com uma vibe leve e magica.",
    "One Piece": "Uma historia de aventura, amizade, liberdade e seguir seus sonhos, com muitas lutas epicas e momentos emocionantes.",
    "Chainsaw Man": "Uma historia intensa sobre sobrevivencia, desejos humanos e luta contra demonios, com muita açao e um lado emocional mais profundo do que parece."
}


// parte q vai aparecer sobre os card

function mostrarAnime(nome) {
  document.getElementById("titulo").innerText = nome;
  document.getElementById("descricao").innerText = descricoes[nome] || "Sem descrição"
  document.getElementById("modal").style.display = "block"
}

function fechar() {
  document.getElementById("modal").style.display = "none"
}

// botao de sair do card

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})