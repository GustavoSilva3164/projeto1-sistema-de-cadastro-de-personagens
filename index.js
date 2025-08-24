const readline = require("readline");
const Personagen = require("./class/Personagen.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function main() {
  console.log("=== Cadastro de Personagens ===");

  const nome = await perguntar("Digite o nome do personagem: ");
  const classe = await perguntar("Digite a classe (Guerreiro, Mago, Arqueiro): ");
  const vida = parseInt(await perguntar("Digite os pontos de vida: "), 10);

  const jogador = new Personagen(nome, classe, vida);

  console.log("\n✅ Personagem criado com sucesso!");

  let sair = false;
  while (!sair) {
    console.log("\n=== Ações ===");
    console.log("1 - Atacar");
    console.log("2 - Receber dano");
    console.log("3 - Curar");
    console.log("4 - Mostrar informações");
    console.log("0 - Sair");

    const opcao = await perguntar("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        const ataca = parseInt(await perguntar("Quanto de ataque? "), 10);
        jogador.atacar(ataca);
        break;
      case "2":
        const dano = parseInt(await perguntar("Quanto de dano? "), 10);
        jogador.receberDano(dano);
        break;
      case "3":
        const cura = parseInt(await perguntar("Quanto de cura? "), 10);
        jogador.curar(cura);
        break;
      case "4":
        jogador.mostrarInfo();
        break;
      case "0":
        sair = true;
        break;
      default:
        console.log("❌ Opção inválida!");
    }
  }

  rl.close();
}

main();
