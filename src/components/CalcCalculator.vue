<template>
    <div class="container">
        <div class="input-group">
            <label class="disc"> Altura </label>
            <input v-model="altura" type="number" placeholder="ex.: 1.70" />

            <span class="disc"> Peso </span>
            <input v-model="peso" type="number" placeholder="ex.: 60.4" />
        </div>
        <div class="button-group">
            <button class="btn1" @click="Calc" :disabled="disableButton">Calcular</button>
            <button class="btn2" @click="Clear">Limpar</button>
        </div>
    </div>
</template>

<script>
import * as fb from "../plugins/firebase";
export default {
    data() {
        return {
            altura: "",
            peso: "",
            imc: "",
            uid: "",
        };
    },
    mounted() {
        this.uid = fb.auth.currentUser.uid;
        this.buscarImcsDoServidor();
    },
    computed: {
        disableButton() {
            return !this.peso || !this.altura;
        },
    },
    methods: {
        Calc() {
            this.altura = this.altura.replace(",", ".");
            this.imc = this.peso / (this.altura * this.altura);
            this.imc = this.imc.toFixed(1);

            this.$emit("mostrar-tabela", this.imc);

            this.Add();
            this.altura = "";
            this.peso = "";
        },
        async Add() {
            await fb.imcsCollection.add({
                peso: this.peso,
                altura: this.altura,
                imc: this.imc,
                data: new Date().getDate() + " / " + (new Date().getMonth() + 1) + " / " + new Date().getFullYear(),
                owner: this.uid,
            });
            this.buscarImcsDoServidor();
            this.altura = "";
            this.peso = "";
        },
        Clear() {
            this.altura = "";
            this.peso = "";
            this.imc = "";
            this.$emit("clear");
        },
        async buscarImcsDoServidor() {
            this.tarefas = [];
            const logTasks = await fb.imcsCollection.where("owner", "==", this.uid).get();
            for (const doc of logTasks.docs) {
                this.tarefas.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                });
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
input {
    border: hsl(0, 0%, 80%) solid 1px;
    border-radius: 1px;
    padding-left: 10px;
    padding-right: 10px;
    width: 150px;
    margin: 1rem;
    resize: none;
    outline: none;
    appearance: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.input-group {
    margin: auto;
    display: flex;
    flex-direction: column;
}

button {
    border: solid 1px;
    width: 85px;
    padding: 0.5rem;
    background-color: hsl(0, 0%, 100%);
    transition: 0.5s;
}

.btn1 {
    border-radius: 10px 0 0 10px;
    color: rgb(0, 165, 0);
}
.btn1:disabled {
    border-radius: 10px 0 0 10px;
    color: rgba(0, 165, 0, 0.3);
}
.btn2 {
    border-radius: 0 10px 10px 0;
    color: red;
}
.disc {
    padding-left: 10px;
}

.button-group {
    margin: auto;
}
</style>
