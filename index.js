async function addItem() {

    let item = document.getElementById("item");
    let price = document.getElementById("price");
    let qnt = document.getElementById("qnt");

    let nome = item.value;
    let preço = price.value;
    let quantidade = qnt.value;

    if (!nome) {
        alert("Nome invalido!");
        return;
    }
    if (!preço) {
        alert("Preço invalido!");
        return;
    }
    if (!quantidade) {
        alert("Quantidade invalido!");
        return;
    }

    let products = {
        title: nome,
        price: price,
        quantity: quantidade
    };

    try {
        let response = await fetch("https://dummyjson.com/carts/1", {
            method: "POST",
            body: JSON.stringify(products),
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            alert("Ocorreu um erro ao criar a lista o item :(");
            return;
        }

        item.value = "";
        price.value = "";
        qnt.value = "";

        alert("item iserido com sucesso!");

    } catch (ex) {
        alert("Ocorreu um erro de rede ao criar ao listar: " + ex.message)
    }



}

let regExpAmp = /\&/g, regExpLt = /</g, regExpGt = />/g;

function encode(x) {
    return (x ? x.replace(regExpAmp, "&amp;").replace(regExpLt, "&lt;").replace(regExpGt, "&gt;") : "");
}

async function listar() {

    try {

        let response = await fetch("https://dummyjson.com/carts/1");

        if (!response.ok) {
            alert("Ocorreu um erro ao listar as pessoas :(");
            return;
        }

        let lista = await response.json();

        let html = `<h1>Pessoas cadastradas: ${lista.length}</h1>`;

        for (let i = 0; i < lista.length; i++) {
            html += `
						<hr />
						<h2>
							<i>(${lista[i].id})</i> ${encode(lista[i].nome)}
						</h2>
						<p>
							E-mail: ${encode(lista[i].email)}
						</p>
					`;
        }

        let divListagem = document.getElementById("divListagem");

        divListagem.innerHTML = html;

    } catch (ex) {
        alert("Ocorreu um erro de rede ao listar as pessoas: " + ex.message)
    }

}
