<template>
    <v-card>
        <v-card width="300" height="300" :title="caracter.name"
            style="display: flex;align-items: center; justify-content: center; flex-direction: column;">
            <v-img width="80%" aspect-ratio="3/4" style="border-radius: 5px;margin-bottom: 1px;" cover
                :src="caracter.thumbnail.path + '.' + caracter.thumbnail.extension"></v-img>

        </v-card>
    </v-card>
</template>
<script>

export default {
    props: {
        caracter: Object // Define una propiedad llamada "object" que recibe un objeto como valor
    }
}
</script>