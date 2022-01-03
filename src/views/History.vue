<template>
    <table>
        <tr class="title">
            <td>Data</td>
            <td>Peso</td>
            <td>Altura</td>
            <td>IMC</td>
        </tr>
        <tr v-for="i of imcs" :key="i.title">
            <td>{{ i.data }}</td>
            <td>{{ i.peso }}</td>
            <td>{{ i.altura }}</td>
            <td>{{ i.imc }}</td>
        </tr>
    </table>
</template>

<script>
import * as fb from "../plugins/firebase";

export default {
    name: "app",
    data() {
        return {
            uid: "",
            imcs: [],
        };
    },
    mounted() {
        this.uid = fb.auth.currentUser.uid;
        this.buscarImcsDoServidor();
    },
    methods: {
        async buscarImcsDoServidor() {
            this.imcs = [];
            const logImcs = await fb.imcsCollection.where("owner", "==", this.uid).get();
            for (const doc of logImcs.docs) {
                this.imcs.push({
                    id: doc.id,
                    peso: doc.data().peso,
                    altura: doc.data().altura,
                    imc: doc.data().imc,
                    data: doc.data().data,
                });
                this.imcs.reverse();
            }
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
table {
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    text-align: left;
}
td {
    padding: 15px;
    padding-left: 0;
    padding-left: 25px;
}
tr {
    border-top: solid 1px #9e9e9e;
    transition: 00.5s;
}
tr:hover {
    background-color: #9e9e9e0e;
}
.title td {
    color: #0099ff;
}
</style>
