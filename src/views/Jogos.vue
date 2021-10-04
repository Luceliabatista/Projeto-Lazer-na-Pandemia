<template>
  <v-container>
    <h4 class="text-center">Nós separamos uma lista com os jogos mais prestigiados da história! </h4>

    <p class="caption gray--text mb-0">Filtros:</p>
    <select class="filter pa-2" name="select" v-card="selectedOption" @change="jogoFilter">
        <option value="relevancia" selected>Relevância</option>
        <option value="older">Mais antigos</option>
        <option value="newer">Mais novos</option>
    </select>

    <JogosLista :jogos="jogosOrdenados"/>
    
  </v-container>
</template>

<script>

import JogosLista from '../components/JogosLista';

export default {
  name: 'Jogos',
  components: {
    JogosLista
  },
  data() {
    return {
      jogos: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
      .then(response => response.json())
      .then(json => {
        this.jogos = json;
      })
  },
  computed: {
    jogosOrdenados() {
      const listaComputada = this.jogos.slice(0).sort(
        (a, b) =>  a.id < b.id ? -1 : 1
      );
      return listaComputada;
    }
  },
  methods: {
      fetchJogos() {
        fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json")
        .then((response) => response.json())
        .then((json) => {
            this.jogos = json;
        });
      },
      jogoFilter(option) {
          switch (option.target.value) {
              case 'relevancia':
                  this.fetchJogos();
                  break;
              case 'newer':
                  this.jogos.sort((a, b) => a.year < b.year ? -1 : 1); 
                  break;
              case 'older':
                  this.jogos.sort((a, b) => a.year < b.year ? 1 : -1); 
                  break;         
          }
      },
      firstLetterUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
  }
}
</script>

<style scoped>
.p {
  font-size: 20px !important;
}
.filter {
    border: 1px solid gray;
    border-radius: 6%;
}
</style>