// ATIVIDADE EM SALA
// Registrador de Ingressos de Eventos
// Como fazemos? Será criada uma classe que permitirá um gerenciamento
// completo dos usuários que desejam acessar esses eventos.
// ✓ Defina a classe TicketManager, que terá um array de eventos que começará vazio. A classe deve ter uma variável privada "basePrice", que adicionará um custo adicional ao preço de cada evento.
// ✓ Deve possuir o método "getEvents" que mostrará os eventos salvos.
// ✓ Deve possuir o método "addEvent", que receberá os seguintes parâmetros:
// ● nome
// ● lugar
// ● preço (0,15 deve ser adicionado ao valor original)
// ● capacidade (50 por padrão)
// ● data (hoje por padrão)
// O método também deve criar o campo id de auto-incremento e o campo "participants" que sempre iniciará com um array vazio.
// ✓ Deve ter um método "addUser" que receberá:
// ● ID do evento (deve existir, adicione validações)
// ● ID do usuário
// O método deve avaliar que o evento existe e que o usuário não foi previamente cadastrado (validação de data e lotação será evitada para não alongar o desafio) Se tudo estiver em ordem, você deve adicionar o id do usuário no array “participants” daquele evento.
// ✓ Deve possuir um método "putEventoEnGira" que receberá:
// ● ID do evento
// ● nova cidade
// ● Nova data
// O método deve copiar o evento existente, com um novo local, nova data, novo id e seus participantes vazios (Use o operador spread para o restante das propriedades)

console.group("Registrador de Ingressos de Eventos");

class TicketManager {
  #basePrice = 0.15;

  constructor() {
    this.events = [];
    this.nextId = 1;
  }

  addEvent(nome, lugar, preco, capacidade = 50, data = new Date()) {
    const novoEvento = {
      id: this.nextId++,
      nome: nome,
      lugar: lugar,
      preco: preco + this.#basePrice,
      capacidade: capacidade,
      data: data,
      participants: [],
    };
    this.events.push(novoEvento);
  }

  getEvents() {
    return this.events;
  }
}

const manager = new TicketManager();
manager.addEvent("Concerto de Rock", "Estádio", 100);
manager.addEvent("Peça de Teatro", "Teatro Municipal", 50, 100);
console.log(manager.getEvents());

console.groupEnd();
