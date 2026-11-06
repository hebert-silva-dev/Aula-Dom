
// Crie dois campos (Nome e E-mail) e um botão. Ao clicar, mostre no Console os dois valores. Pegue um campo por id e o outro por classe (use métodos diferentes).

// const nome = document.getElementById("nome");
// const email = document.querySelector(".campo-email");
// console.log(email);

// document.getElementById("btn-ler").addEventListener("click",
//     function () {
//         console.log("Nome: ", nome.value);
//         console.log("Email: ", email.value);
//     }
// );

// const blocos = document.querySelectorAll(".bloco");
// const cores = ["tomato", "orange", "gold", "mediumseagreen", "dodgerblue"];

// blocos.forEach((bloco, i) => {
//     bloco.style.backgroundColor = cores[i];
//     bloco.textContent = "Bloco " + (i + 1);
// });

// Um botão que mostra quantas vezes foi clicado: "Cliques: 0", "Cliques: 1"...

// const botaoAdd = document.getElementById("contador-add");
// const botaoRemove = document.getElementById("contador-remove")

// let cliques = 0;

// botaoAdd.addEventListener("click", function () {
//     cliques++;
//     botaoAdd.textContent = "Cliques: " + cliques;
// });

// botaoRemove.addEventListener("click", function(){
//     cliques--;
//     botaoRemove.textContent = "Cliques: " + cliques;
// });

// Em uma <table id="tabela-dados"> vazia, crie via JavaScript uma linha <tr> com duas células <td> ("Nome" e "Idade") e coloque tudo na tabela.

// const tabela = document.getElementById("tabela-dados");

// const linha = document.createElement("tr")
// const colunaNome = document.createElement("td");
// const colunaIdade = document.createElement("td");

// linha.appendChild(colunaNome);
// linha.appendChild(colunaIdade);
// tabela.appendChild(linha);

// colunaNome.textContent ="Hebert";
// colunaIdade.textContent = 21;

//Botão "Mostrar/Esconder" que alterna a visibilidade de um parágrafo usando classList.toggle.

// const texto = document.getElementById("segredo");
// const botao = document.getElementById("btn-toggle");

// botao.addEventListener("click", function(){
//     texto.classList.toggle("oculto");
// });

// Um botão que alterna o tema da página entre claro e escuro usando uma classe no body. O texto do botão também deve mudar ("Modo escuro" / "Modo claro").

const botao = document.getElementById("btn-tema");
const tema = document.querySelectorAll("escuro");

botao.addEventListener("click", function(){
    document.body.classList.toggle("escuro");
});