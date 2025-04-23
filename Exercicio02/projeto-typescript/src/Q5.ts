let idade_pessoa: number = 18;

if (idade_pessoa < 16) {
    console.log("Não pode votar");
} else if ((idade_pessoa >= 16 && idade_pessoa < 18)|| (idade_pessoa > 70)) {
    console.log("Voto opcional");
} else {
    console.log("Voto obrigatório");
}