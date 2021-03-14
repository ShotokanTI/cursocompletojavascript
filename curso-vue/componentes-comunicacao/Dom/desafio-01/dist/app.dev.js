"use strict";

new Vue({
  el: '#desafio',
  data: {
    nome: 'Matheus barbosa do nascimento',
    idade: 24,
    linkGoogle: 'https://i.pinimg.com/736x/a4/3a/fe/a43afe48ddc41b7993cda78b843c599d.jpg'
  },
  computed: {
    multiplicarIdade: function multiplicarIdade() {
      return this.idade * 3;
    },
    random: function random() {
      return Math.floor(Math.random() * 2);
    }
  }
});