class Sabotador {
    constructor(nome, idade) {
      this.id = this.#generateId();
      this.nome = nome;
      this.idade = idade;
    }
  
    #generateId() {
      return Math.floor(Math.random() * 10000);
    }

    andar(nome) {
      console.log(`${nome} está andando.`);
    }
  
    #sabotar(nome) {
      console.log(`${nome} está sabotando.`);
    }
  
    votar(nome) {
      console.log(`${nome} está votando.`);
    }
  
    #matar(nome) {
      console.log(`${nome} está matando.`);
    }
  
    falar(nome) {
      console.log(`${nome} está falando.`);
    }
  }

  export default Sabotador;