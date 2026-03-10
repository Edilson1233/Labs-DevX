        // LAB 3: Contador
        let numeroLikes = 0;
        
        document.getElementById("btn-curtir").addEventListener("click", function() {
            numeroLikes++; // Aumenta 1
            document.getElementById("contador").innerText = numeroLikes; // Atualiza a tela
        });

        // LAB 4: Login
        document.getElementById("btn-login").addEventListener("click", function() {
            let emailDigitado = document.getElementById("email").value;
            let senhaDigitada = document.getElementById("senha").value;
            let paragrafoMensagem = document.getElementById("mensagem-login");

            if (emailDigitado === "admin" && senhaDigitada === "1234") {
                paragrafoMensagem.innerText = "Login feito";
                paragrafoMensagem.className = "sucesso";
            } else {
                paragrafoMensagem.innerText = "Credenciais inválidas";
                paragrafoMensagem.className = "erro";
            }
        });

        
        // LAB 5: Todo List (Com botão de remover)
      
        document.getElementById("btn-adicionar").addEventListener("click", function() {
            let input = document.getElementById("input-tarefa");
            let textoDaTarefa = input.value;

            if (textoDaTarefa !== "") {
                let novoItem = document.createElement("li");
                novoItem.innerText = textoDaTarefa + " ";

                let botaoRemover = document.createElement("button");
                botaoRemover.innerText = "Remover";
                
                botaoRemover.addEventListener("click", function() {
                    novoItem.remove(); 
                });

                novoItem.appendChild(botaoRemover);
                document.getElementById("lista-tarefas").appendChild(novoItem);

                input.value = "";
            }
        });

        //
        // MINI PROJETO: Sistema de Inscriçã
        document.getElementById("btn-inscrever").addEventListener("click", function() {
        
            let idadeDigitada = document.getElementById("idade").value;
            let mensagemInscricao = document.getElementById("mensagem-inscricao");

            
            if (idadeDigitada < 18) {
                mensagemInscricao.innerText = "Erro: É necessário ter 18 anos ou mais.";
                mensagemInscricao.className = "erro";
            } else {
                mensagemInscricao.innerText = "Inscrição feita com sucesso!";
                mensagemInscricao.className = "sucesso";
            }
        });

        //LAB: Explorador de DOM
        let cards = document.querySelectorAll(".card");

        console.log("Número de cards encontrados: " + cards.length);

        let primeiroCard = document.querySelector(".card p");

primeiroCard.textContent = "Produto 1 Actualizado!";

// Remover um card ao clicar o botão "Remover sem usar ID"
 document.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
       event.target.closest(".card").remove();
    }
});


//Fórmulário controlado

const formulario = document.querySelector('#meuFormulario');
const inputNome = document.querySelector('#nomeCliente');
const mensagemExibicao = document.querySelector('#mensagemExibicao');

formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const nomeDigitado = inputNome.value;

    mensagemExibicao.textContent = `Olá, ${nomeDigitado}! Seu formulário foi recebido pela TechVerse Digital com sucesso.`;

    inputNome.value = '';
});

