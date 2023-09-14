<template>
    <div class="mt-3">

        <h3>Listado de personajes</h3>

        <v-container>
            <v-row>
                <v-col v-for="item in caracters" :key="item.id">
                    <v-card width="350" height="500" @click="openDialog(item)" :title="item.name" class="card">
                        <v-img width="340" class="img" :src="item.thumbnail.path + '.' + item.thumbnail.extension"
                            cover></v-img>
                    </v-card>
                    <v-dialog v-model="dialog" width="auto">
                        <personaje :caracter="actualCaracter"></personaje>
                        <v-btn color="primary" block @click="dialog = false">Cerrar</v-btn>
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
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=100`
    const { data } = await axios.get(url)
    caracters.value = data.data.results.filter(caracter => {
        return !caracter.thumbnail.path.includes("image_not_available");
    })
    console.log(data.data.results)
}
</script>`
<style>
.card {
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
}

.img {
    border-radius: 100%;
    margin-bottom: 1px;
}
</style>