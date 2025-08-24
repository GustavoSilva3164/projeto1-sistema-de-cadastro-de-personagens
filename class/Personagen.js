class Personagen {
  constructor(nome, classe, vida) {
    this.nome = nome;
    this.classe = classe;
    this.vida = vida;
  }

  atacar(poder) {
    console.log(`${this.nome} atacou com poder ${poder}!`);
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida < 0) this.vida = 0;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida atual: ${this.vida}`);
  }

  curar(cura) {
    this.vida += cura;
    console.log(`${this.nome} foi curado em ${cura} pontos. Vida atual: ${this.vida}`);
  }

  mostrarInfo() {
    console.log(`\n🧙 Informações do Personagem:`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Classe: ${this.classe}`);
    console.log(`Vida: ${this.vida}`);
  }
}

module.exports = Personagen;
