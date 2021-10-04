<template>
  <v-container class="mt-5">
    <v-row>
        <v-col>
            <p class="caption gray--text mb-0">Filtros:</p>
            <select class="filter pa-2" name="select" v-model="selectedOption" @change="animeFilter">
                <option value="relevancia" selected>Relevância</option>
                <option value="name_a_z">Por nome (A-Z)</option>
                <option value="name_z_a">Por nome (Z-A)</option>
            </select>
        </v-col>
    </v-row>
    <v-row row wrap>
      <v-col v-for="anime in animeList" :key="anime.id" width="400px" max-width='450px' class="pa-5" @click="selectAnime(anime.id)">
        <v-card class="pa-5" :class="[anime.status.length < 12 ? 'ongoing-anime' : 'completed-anime', hasId(anime.id) ? 'selected' : 'diselected']" max-width="400px">
          <v-img :src="anime.photo" class="mx-auto" max-width="350px"/>
          <h2 class="title text-center my-2">{{ anime.name }}</h2>
          <v-col class="py-0">
            <p class="body-2">{{ anime.description }}</p>
          </v-col>
          <v-col class="py-0">
            <div class="caption grey--text">
                Gênero:
            </div>  
            <p class="subtitle-2">{{ anime.genre }}</p>
          </v-col>
          <v-col class="ma-auto">
            <v-chip dark :class="anime.status.length < 12 ? 'ongoing-anime-chip' : 'completed-anime-chip'" class="margin-auto text-center">{{ firstLetterUpperCase(anime.status) }}</v-chip>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      animeList: [],
      selectedOption: 'relevancia',
      selectedAnime: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((response) => response.json())
      .then((json) => {
        this.animeList = json;
      });
  },
  methods: {
      fetchAnimes() {
        fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
        .then((response) => response.json())
        .then((json) => {
            this.animeList = json;
        });
      },
      animeFilter(option) {
          switch (option.target.value) {
              case 'relevancia':
                  this.fetchAnimes();
                  break;
              case 'name_a_z':
                  this.animeList.sort((a, b) => a.name < b.name ? -1 : 1); 
                  break;
              case 'name_z_a':
                  this.animeList.sort((a, b) => a.name < b.name ? 1 : -1); 
                  break;         
          }
      },
      firstLetterUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      selectAnime(id) {
        if(this.selectedAnime.includes(id)) {
          this.selectedAnime.splice(this.selectedAnime.indexOf(id), 1)
        } else {
          this.selectedAnime.push(id);
        }
      },
      hasId(id) {
        if(this.selectedAnime.includes(id)) {
          return true;
        } else {
          return false;
        }
      }
  }
};
</script>

<style scoped>
    .completed-anime {
        border-bottom: 3px solid #3CD1C2;
    }
    .ongoing-anime {
        border-bottom: 3px solid orange;
    }
    .completed-anime-chip {
        background: #3CD1C2 !important;
    }
    .ongoing-anime-chip {
        background: orange !important;
    }
    .margin-auto {
        display: block;
        width: auto;
        margin: 0 auto;
    }
    .filter {
        border: 1px solid gray;
    }
    .col {
        flex-grow: 0;
    }
    .selected {
      background-color: #FFB74D !important;
      transition: background-color 1s;
    }
    .diselected {
      background-color: white !important;
      transition: background-color 1s;
    }
</style>
