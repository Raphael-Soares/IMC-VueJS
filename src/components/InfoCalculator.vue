<template>
    <div class="info">
        <h2>{{ what.title }}</h2>
        <h4>{{ what.text }}</h4>
        <h2>{{ how.title }}</h2>
        <h4>{{ how.text }}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            what: {
                title: "O que é IMC?",
                text: "IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.",
            },
            how: {
                title: "Como é calculado?",
                text: "O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.",
            },
        };
    },
};
</script>

<style scoped>
/* TEXT */

.info {
    padding: 2rem;
}

h2 {
    color: #0099ff;
    text-align: center;
}
h4 {
    color: hsl(0, 0%, 40%);
}
</style>
