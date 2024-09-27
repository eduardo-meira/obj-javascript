function Animal(especie) {
  this.especie = especie
}

function cachorro(especie, nome, som) {
  this.nome = nome
  let _identificarSom = som
  this.captarSom = function () {
    return som
  }
  Animal.call(this, especie)
}

function gato(especie, nome, som) {
  this.nome = nome
  let _identificarSom = som
  this.captarSom = function () {
    return som
  }
  Animal.call(this, especie)
}

const animal1 = new Animal('felino')
const animal2 = new Animal('mamífero')
const gato1 = new gato('felino', 'porronto', 'miau miau')
const cachorro1 = new cachorro('mamífero', 'eliot', 'au au')
const cachorro2 = new cachorro('mamífero', 'bolt', 'au au')

console.log(cachorro1.captarSom())