<template>
    <div class="mt-3">

        <h3>Listado de personajes</h3>

        <v-container>
            <v-row>
                <v-col v-for="item in caracters" :key="item.id">
                    <v-card width="300" height="300" @click="openDialog(item)" :title="item.name"
                        style="display: flex;align-items: center; justify-content: center; flex-direction: column;">
                        <v-img width="80%" aspect-ratio="3/4" style="border-radius: 5px;margin-bottom: 1px;" cover
                            :src="item.thumbnail.path + '.' + item.thumbnail.extension"></v-img>
                    </v-card>

                    <v-dialog v-model="dialog" width="auto">
                        <personaje :caracter="actualCaracter"></personaje>
                        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                    </v-dialog>

                </v-col>
            </v-row>
        </v-container>


    </div>
</template>
<script setup>

import axios from "axios";
import CryptoJS from "crypto-js";
const PRIV_KEY = "dc1c9e15c529c9176fa615bb364c6b538eb8b563";
const PUBLIC_KEY = "1069f78b41731dbb5ca5cba2f9844744";
const caracters = ref([])
const actualCaracter = ref(null)
onBeforeMount(() => {
    loadCaracters()
})
const openDialog = (caracter) => {
    actualCaracter.value = caracter;
    dialog.value = true;
}
const dialog = ref(false);
const loadCaracters = async () => {
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    const { data } = await axios.get(url)
    caracters.value = data.data.results
    console.log(data.data.results)
}
</script>