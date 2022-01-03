<template>
    <div class="App">
        <div class="circle"></div>
        <div class="profile">
            <div class="name">{{ user_info.nome }}</div>
            <div class="info">{{ user_info.email }}</div>
            <br />
            <div class="info">Entrou em: {{ user_info.entrou_em }}</div>
            <div class="info">Nesceu em: {{ user_info.data_nasc }}</div>
        </div>
    </div>
</template>

<script>
import * as fb from "../plugins/firebase";
export default {
    name: "App",
    data() {
        return {
            user_info: {},
            uid: "",
        };
    },
    mounted() {
        this.uid = fb.auth.currentUser.uid;
        this.buscarPerfilDoServidor();
    },
    methods: {
        async buscarPerfilDoServidor() {
            this.user_info = [];
            const logProfile = await fb.profileCollection.where("owner", "==", this.uid).get();
            for (const doc of logProfile.docs) {
                this.user_info = {
                    peso: doc.data().peso,
                    altura: doc.data().altura,
                    data_nasc: doc.data().data_nasc,
                    nome: doc.data().nome,
                    email: doc.data().email,
                    entrou_em: doc.data().entrou_em,
                };
                this.CalcImc();
            }
        },
        CalcImc() {
            this.user_info.imc = this.user_info.peso / (this.user_info.altura * this.user_info.altura);
            this.user_info.imc = this.user_info.imc.toFixed(1);
        },
    },
};
</script>

<style scoped>
.App {
    display: flex;
    flex-direction: row;

    /* border: solid 1px; */
    width: 700px;
    margin: auto;
    margin-top: 50px;
}
.circle {
    border: solid 2px;
    border-radius: 50%;
    height: 200px;
    width: 200px;
}

.profile {
    /* border: solid 1px; */
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.name {
    font-size: 2rem;
    font-weight: 700;
    color: #0099ff;
}
.info {
    color: #4b4b4b;
    font-weight: 700;
}
</style>
