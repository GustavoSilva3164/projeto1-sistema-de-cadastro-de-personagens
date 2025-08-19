class Personagen {
  #vida;
  #vidaMaxima;

  constructor(nome, classe, pontosDeVida) {
    this.nome = nome;
    this.classe = classe;
    this.#vida = pontosDeVida;
    this.#vidaMaxima = pontosDeVida;
  }

  get vida() {
    return this.#vida;
  }

  mostrarInfo() {
    const barra = "█".repeat(Math.round((this.#vida / this.#vidaMaxima) * 10)).padEnd(10, "░");
    console.log(`\n👤 ${this.nome} | Classe: ${this.classe}`);
    console.log(`❤️ Vida: ${this.#vida}/${this.#vidaMaxima} [${barra}]`);
  }

  atacar() {
    console.log(`🗡 ${this.nome} (${this.classe}) ataca o inimigo!`);
  }

  receberDano(qtd) {
    this.#vida = Math.max(0, this.#vida - qtd);
    if (this.#vida === 0) console.log(`☠️ ${this.nome} foi derrotado!`);
  }

  curar(qtd) {
    if (this.#vida === 0) {
      console.log(`⚰️ ${this.nome} não pode ser curado, já foi derrotado!`);
      return;
    }
    this.#vida = Math.min(this.#vidaMaxima, this.#vida + qtd);
    console.log(`✨ ${this.nome} recuperou ${qtd} pontos de vida!`);
  }
}

export default Personagen;
