<template>
  <v-container>
      <v-card  class="mb-6" v-for="jogo of jogos" :key="jogo.id"  outlined shaped tile>
          <v-card-title>
              <a :href="gerarLink(jogo.id)" target="blank" ><p class="title text-center my-2 teste"> #{{ jogo.id }} - {{ jogo.name }} </p></a>
          </v-card-title>
          <v-card-subtitle>
              {{ jogo.year }} - {{ jogo.genre }}
          </v-card-subtitle>
          <a :href="gerarLink(jogo.id)" target="blank" ><v-img class="mb-3" :src="jogo.photo" :alt="jogo.photo "/></a>
          <v-text class="pl-3">
              Disponível para:
              <v-list class="pl-6" v-for="plataforma of jogo.platform" :key="plataforma">
                  - {{ plataforma }}
              </v-list>
          </v-text>
      </v-card>
  </v-container>
</template> 

<script>
export default {
    name: 'JogosLista',
    props: {
      jogos: {
        type: Array,
        required: true
        }
    },
    methods: {
        gerarLink(id){
            switch (id){
                case 1:
                    return "https://www.nintendo.pt/Jogos/Portal-Nintendo/Portal-The-Legend-of-Zelda/Portal-The-Legend-of-Zelda-627606.html";
                case 2:
                    return "https://www.nintendo.pt/Jogos/Super-Nintendo/Super-Mario-World-752133.html";
                case 3: 
                    return "https://streetfighter.com/";
                case 4:
                    return "https://elderscrolls.bethesda.net/pt/skyrim";
                case 5:
                    return "https://www.playstation.com/pt-br/games/the-last-of-us-remastered/";
                case 6:
                    return "https://ffvii-remake.square-enix-games.com/en-us";
                case 7:
                    return "https://www.guerrilla-games.com/play/horizon";
                case 8:
                    return "https://www.rockstargames.com/br/games/sanandreas";
                case 9:
                    return "https://blog.counter-strike.net/";
                case 10:
                    return "https://www.konami.com/games/castlevania/us/en-us/page/history_2020_son";
            }
        }
    }
}
</script>

<style scoped>
.v-list {
    font-size: 14px;
}
.teste {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
}
.v-card a {
  text-decoration: none;    
}
</style>