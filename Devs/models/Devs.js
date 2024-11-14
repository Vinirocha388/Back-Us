class DEVs {
    constructor(nome, idade, funcao) {
      this.id = this.#generateId();
      this.nome = nome;
      this.idade = idade;
      this.funcao = funcao;
    }
  
    #generateId() {
      return Math.floor(Math.random() * 10000);
    }

    andar(nome) {
      console.log(`${nome} está andando.`);
    }
  
    morrer(nome) {
      console.log(`${nome} morreu.`);
    }
  
    fazerTarefas(nome) {
      console.log(`${nome} está fazendo tarefas.`);
    }
  }

  export default DEVs;
  