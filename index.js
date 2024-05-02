async function addItem(){
    
    let inpNm = document.getElementById("inpNm");
    let price = document.getElementById("price");

    let nome = inpNm.value;
    let preço = price.value;

    if(!nome){
        alert("Nome invalido!");
        return;
    }
    if(!preço){
        alert("Preço invalido!");
        return;
    }

    let produto = {
        nome: nome,
        preço: price
    }

}