<template>
    <div id="app">
        <table>
            <thead class="table-title">
                <tr>
                    <td>IMC</td>
                    <td>CLASSIFICAÇÃO</td>
                    <td>GRAU DE OBESIDADE</td>
                </tr>
            </thead>

            <tr class="table-item" v-bind:class="{highlighted: grade[0]}">
                <td>MENOR QUE 18,5</td>
                <td>MAGREZA</td>
                <td>0</td>
            </tr>

            <tr class="table-item" v-bind:class="{highlighted: grade[1]}">
                <td>ENTRE 18,5 E 24,9</td>
                <td>NORMAL</td>
                <td>0</td>
            </tr>

            <tr class="table-item" v-bind:class="{highlighted: grade[2]}">
                <td>ENTRE 25,0 E 29,9</td>
                <td>SOBREPESO</td>
                <td>I</td>
            </tr>

            <tr class="table-item" v-bind:class="{highlighted: grade[3]}">
                <td>ENTRE 30,0 E 39,9</td>
                <td>OBESIDADE</td>
                <td>II</td>
            </tr>

            <tr class="table-item" v-bind:class="{highlighted: grade[4]}">
                <td>MAIOR QUE 40,0</td>
                <td>OBESIDADE GRAVE</td>
                <td>III</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ["imc"],
    data() {
        return {
            grade: [false, false, false, false, false],
        };
    },
    mounted() {
        this.Highlight();
    },
    methods: {
        Highlight() {
            this.grade = [false, false, false, false, false];
            if (this.imc < 18.5) this.grade[0] = true;
            else if (this.imc <= 24.9) this.grade[1] = true;
            else if (this.imc <= 29.9) this.grade[2] = true;
            else if (this.imc <= 39.9) this.grade[3] = true;
            else this.grade[4] = true;
        },
    },
};
</script>

<style scoped>
table {
    border-collapse: collapse;
}

td {
    padding: 5px;
}

tr:nth-child(odd) {
    background-color: #ffffff;
}
tr:nth-child(even) {
    background-color: hsla(0, 0%, 80%, 0.5);
}
thead {
    font-weight: bold;
}

.table-title td {
    background-color: #0099ff;
    color: white;
}

.table-item {
    background-color: hsl(0, 0%, 80%);
}

.highlighted {
    color: white;
    background-color: #0099ff !important;
}
</style>
