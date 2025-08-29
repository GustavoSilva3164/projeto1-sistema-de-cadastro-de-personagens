const Personagen = require("./class/Personagen.js");

const personagem1 = new Personagen("Seimei", "Feiticeiro", 8000);
const personagem2 = new Personagen("Shidou", "Assassino Das Sombras", 7000);
const personagem3 = new Personagen("Hitori", "Saint Guardian", 15500);

personagem1.atacar(5000); 
personagem1.mostrarInfo();

personagem2.atacar(3000);
personagem2.mostrarInfo();

personagem3.atacar(1200);
personagem3.mostrarInfo();

