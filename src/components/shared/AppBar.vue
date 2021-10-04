<template>
  <div class="app-bar">
    <v-app-bar color="orange lighten-1" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Animes e Games</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="orange lighten-4 red-text"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/anime">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-movie-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Animes</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/jogos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-gamepad-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Games</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sobre">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
* {
  font-family: above;
}
.app-bar a {
  text-decoration: none;
  color: black !important;
}
</style>
