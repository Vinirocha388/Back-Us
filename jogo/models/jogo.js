class Jogo {
    constructor(participantes, tempo, objetivo) {
      this.participantes = participantes;
      this.tempo = tempo;
      this.objetivo = objetivo;
    }



    tempo(tempo) {
        console.log(`O tempo do jogo está correndo: ${tempo} !!!`);
    }
  
    iniciar(tempo) {
      console.log(`O jogo ${tempo} está começando.`);
    }
  
    encerrar(tempo) {
      console.log(`O jogo foi encerrado com o tempo de ${tempo} !!!.`);
    }
  }

  export default Jogo;