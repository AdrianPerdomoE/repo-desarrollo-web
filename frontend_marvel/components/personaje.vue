<template >
    <v-container style="width: 100dvw; height: 100dvh; background-color:#eee">
        <v-row justify="start">
            <v-col cols="4">
                <v-img width="80%" aspect-ratio="3/4" class="img" cover
                    :src="caracter.thumbnail.path + '.' + caracter.thumbnail.extension"></v-img>
            </v-col>
            <v-col cols="6" style="text-align: center;">
                <h1>{{ caracter.name }}</h1>
                <v-row>
                    <v-col :v-if="caracter.description">
                        <p class="text-center">
                            {{ caracter.description }}
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col style="border-radius: 15px;">
                        <v-table>
                            <tbody>
                                <tr>
                                    <td>Cantidad de comics</td>
                                    <td>{{ caracter.comics.available }}</td>
                                </tr>
                                <tr>
                                    <td>Cantidad de series</td>
                                    <td>{{ caracter.series.available }}</td>
                                </tr>
                                <tr>
                                    <td>Cantidad de historias</td>
                                    <td>{{ caracter.stories.available }}</td>
                                </tr>
                                <tr>
                                    <td>Cantidad de eventos</td>
                                    <td>{{ caracter.events.available }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="2">
                        <h1>Series</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" v-for=" (serie, index) in caracter.series.items" :key="index">
                    <v-col cols="12" v-if="index < 3">
                        <h2>{{ index + 1 }}. {{ serie.name }}</h2>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>


    </v-container>
</template>
<script>
export default {
    props: {
        caracter: Object // Define una propiedad llamada "object" que recibe un objeto como valor
    }
}
</script>
<style>
td {
    background-color: #343391;
    color: white;
}
</style>