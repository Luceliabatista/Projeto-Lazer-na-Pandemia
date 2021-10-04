import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Anime from '../components/Anime.vue';
import Jogos from '../views/Jogos.vue'
import Sobre from '../views/Sobre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },

  {
    path: '/jogos',
    name: 'Jogos',
    component: Jogos
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre 
  }
]

const router = new VueRouter({
  routes
})

export default router
