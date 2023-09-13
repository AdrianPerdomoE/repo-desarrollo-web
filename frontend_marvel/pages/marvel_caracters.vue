<template>
    <div class="mt-3">

        <h3>Listado de personajes</h3>

        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Nombre
                    </th>
                    <th class="text-left">
                        Descripción
                    </th>
                    <th class="text-left">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </v-table>

    </div>
</template>
<script setup>
import axios from "axios";
import CryptoJS from "crypto-js";
const PRIV_KEY = "dc1c9e15c529c9176fa615bb364c6b538eb8b563";
const PUBLIC_KEY = "1069f78b41731dbb5ca5cba2f9844744";
const caracters = ref([])

onBeforeMount(() => {
    loadCaracters()
})

const loadCaracters = async () => {
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    const { data } = await axios.get(url)
    caracters.value = data
    console.log(data)
}
</script>