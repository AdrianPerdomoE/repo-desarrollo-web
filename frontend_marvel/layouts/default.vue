<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar style="color: white; background-color: black;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="title">{{
        titleApp
      }}</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="bg-red-darken-4" theme="dark" temporary>
      <v-list>
        <!-- Navegacion -->
        <v-list-item class="text-black" to="/"><v-icon icon="mdi-home" /> Principal </v-list-item>
        <v-list-item class="text-black" title="Personajes" to="/personajes"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="align-center justify-center" style="background-color:#ddd;">
      <!-- slot: Carga el contenido de la página (pages/..) -->
      <slot />
    </v-main>
  </v-layout>
</template>
<script setup>
const titleApp = ref("MARVEL")
const drawer = ref(null)
</script>

<style>
.links {
  margin: 15px;
}

.v-navigation-drawer__content {
  background-color: linear-gradient(34deg, rgba(0, 0, 0, 0) 0%, rgba(232, 10, 33, 1) 38%, rgba(181, 13, 12, 1) 100%) !important;
}

.title {

  text-align: center !important;
  font-size: 35px !important;
}
</style>