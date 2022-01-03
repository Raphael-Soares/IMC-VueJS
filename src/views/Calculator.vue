<template>
    <div id="app">
        <div class="column">
            <div class="row">
                <CalcCalculator @mostrar-tabela="mostrarTabela" @clear="table = false" />
                <GradeCalculator v-if="table" :imc="imc" />
            </div>
            <h3>Seu IMC é {{ imc }}</h3>
        </div>

        <InfoCalculator class="info" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            uid: "",
            imc: "",
            table: false,
            grade: [false, false, false, false, false],
        };
    },
    components: {
        CalcCalculator: () => import("@/components/CalcCalculator.vue"),
        GradeCalculator: () => import("@/components/GradeCalculator.vue"),
        InfoCalculator: () => import("@/components/InfoCalculator.vue"),
    },
    methods: {
        mostrarTabela(imc) {
            this.imc = imc;
            this.table = true;
        },
    },
};
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
}
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}
.row {
    display: flex;
    flex-direction: row;
    margin: auto;
}
.info {
    margin: auto;
    max-width: 70%;
}
</style>
