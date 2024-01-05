class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "não possui ataque definido";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  const heroiI = new Heroi("Gandalf", 1500, "mago");
  heroiI.atacar(); 
  const heroiII = new Heroi("Aragorn", 35, "guerreiro");
  heroiII.atacar(); 
  const heroiIII = new Heroi("Bruce Lee", 32, "monge");
  heroiIII.atacar(); 
  const heroiIV = new Heroi("Hanzo", 28, "ninja");
  heroiIV.atacar(); 