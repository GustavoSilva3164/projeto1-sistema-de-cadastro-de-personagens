const Personagen = require("./class/Personagen.js"); // corrigido para bater com o arquivo

// Criando personagens fixos
const personagem1 = new Personagen("Seimei", "Feiticeiro", 90000);
const personagem2 = new Personagen("Shidou", "Assassino Das Sombras", 70000);
const personagem3 = new Personagen("Hitori", "Saint Guardian", 45000);

// Usando os métodos
personagem1.atacar(500); // precisa passar o poder de ataque
personagem1.mostrarInfo();

personagem2.atacar(300);
personagem2.mostrarInfo();

personagem3.atacar(1200);
personagem3.mostrarInfo();
