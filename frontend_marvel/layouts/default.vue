<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :title="titleApp">
    </v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <!-- Navegacion -->
        <v-list-item to="/"><v-icon icon="mdi-home" /> Principal </v-list-item>
        <v-list-item title="Personajes" to="/personajes"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="align-center justify-center">
      <!-- slot: Carga el contenido de la página (pages/..) -->
      <slot />
    </v-main>
  </v-layout>
</template>
<script setup>
const titleApp = ref("MARVEL")
</script>

<style>
.links {
  margin: 15px;
}
</style>