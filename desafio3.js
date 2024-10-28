const heroi = {
    name: "FelipaoDIO",
    age: 97,
    tipo: "monge"
};

let ataque;
if (heroi.tipo == "monge"){
    ataque = "Artes Marciais";
}else if (heroi.tipo == "mago"){
    ataque = "Magia";
}else if (heroi.tipo == "ninja"){
    ataque = "shuriken";
}else if (heroi.tipo == "guerreiro"){
    ataque = "espada";
}

atacar(heroi, ataque);

function atacar(heroi, ataque){
    console.log(`O ${heroi.tipo} atacou usando ${ataque}`);
}
