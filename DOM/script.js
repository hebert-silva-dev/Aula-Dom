// //Pega o elemento pelo id
// const paragrafo = document.getElementById("mensagem");

// console.log(paragrafo);

// //Altera o texto
// paragrafo.textContent = "O DOM permitiu que o JS me alterasse!";
// paragrafo.style.color = "blue";
// paragrafo.style.borderBottom = "2px solid blue";

// const botao = document.getElementById("btn-acao");
// console.log("Tag do botão:" + botao.tagName);

// Por TAG
// const primeiroP = document.querySelector("p");
// primeiroP.style.backgroundColor = "yellow";

// const alerta = document.querySelector(".alerta");
// console.log(alerta);
// console.log("Por Classe:", alerta.textContent);

// const span = document.querySelector("#unico");
// console.log(span);
// span.textContent = "Alterado pelo querySelector!";

// const pNoDiv = document.querySelector("div p");
// pNoDiv.style.fontWeight = "bold";

// const itens = document.querySelectorAll(".item");                               //Captura de TAG e armazenamento em uma variavel
// console.log(itens);

// for (let i = 0; i < itens.length; i++) {                                        //FOR utilizado para percorrer a lista de itens
//     console.log("Item" + (i + 1) + ": " + itens[i].textContent);                //Função para a exibição de todos os itens
//     if (i % 2 !== 0) {                                                          //Condição IF para encontrar os numeros impares
//         itens[i].style.backgroundColor = "#ccc"                                 //Depois de passar na condição o item passa po uma manipulação de cor para diferenciar 
//     }
// }

// for (const item of itens){                                                      //FOR...OF usado para a manipulação de todos os itens dentro da lista
//     item.style.fontWeight = "bold";
// }

// itens.forEach((item, index) => {                                                //forEach Usado apenas em NodeList usado também para a exibição de todos os itens com o index de cada um
//     console.log(index + ": " + item.textContent);
// });

// const saudacao = document.getElementById("saudacao");
// const nome = document.getElementById("nome");
// const link = document.getElementById("link");

// function mudarDados() {
//     saudacao.textContent = "O conteudo da div foi alterada";
//     nome.value = "Novo valo (Hebert)."

//     saudacao.innerHTML += '<p style = "color: blue";>Conteúdo injetado com innerHTML</p>'

//     link.setAttribute("href", "https://google.com");
//     console.log(link.getAttribute("href"));

//     saudacao.classList.add("destaque");
// }

// document.getElementById("btn-mudar").addEventListener("click", mudarDados);

const lista = document.getElementById("lista");                                             //Capitura o ID do dentro do DOM com a referencia lista e armazena

function adicionarItem() {                                                                  //Função para adicionar um item a lista(TAG <li> )
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo Item ás " + new Date().toLocaleTimeString();
    lista.appendChild(novoItem);
}

function removerUltimo() {

    const ultimo = lista.lastElementChild;

    if (ultimo) {
        lista.removeChild(ultimo)
        console.log("Ultimo item removido")
    } else {
        console.log("Lista vazia. Nada a remover")
    }
}

document.getElementById("btn-add").addEventListener("click", adicionarItem);
document.getElementById("btn-remover").addEventListener("click", removerUltimo);