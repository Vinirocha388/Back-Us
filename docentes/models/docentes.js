class Docentes {
    constructor(nome) {
      this.id = this.#genetateId();
      this.nome = nome;
    }
  
    #genetateId() {  
      return Math.floor(Math.random() * 10000);
    }

    Andar(nome) {
      console.log(`${nome} está andando.`);
    }
  
    Falar(nome) {
      console.log(`${nome} está falando.`);
    }
  }

  export default Docentes;