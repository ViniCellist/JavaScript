import { Banheiro } from "./Banheiro.js";
import { Casa } from "./Casa.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";

const sala = new Sala("Samsung", "Reatratil", "Retratil", "Vidro", "Felpudo");
const quarto = new Quarto("King-size", "Closet imbutido", "Rocketz", "Gamer", "Gamer");
const banheiro = new Banheiro("Porcelana", "Porcelana", "Vidro", "Lorenzetti");
const cozinha = new Cozinha("Dako", "Brastemp", "Marmore", "Estofada", "Eletrolux", "Madeira");

const casa = new Casa(sala, quarto, banheiro, cozinha);

console.log(casa);