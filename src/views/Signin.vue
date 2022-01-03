<template>
    <div id="app">
        <div class="container" v-bind:class="{escuro: passwordError}">
            <div class="info">
                <h1>IMC VueJS</h1>
                <h2>Registro</h2>
            </div>
            <div class="form">
                <div class="login" v-show="!sign">
                    <label for="email"> Insira seu email</label>
                    <input type="text" v-model="user.email" id="email" />
                    <label for="password">Crie sua senha</label>
                    <input type="password" v-model="user.password" id="password" />
                    <label for="password2">Confirme sua senha</label>
                    <input type="password" v-model="user.password2" id="password2" />

                    <label for="name">Insira seu nome completo</label>
                    <input type="text" v-model="user.nome" id="name" />

                    <label for="born"> Insira sua data de nascimento</label>
                    <input type="text" v-model="user.data_nasc" id="born" />
                </div>
            </div>
            <div class="controls">
                <button @click="reset">Limpar</button>
                <button @click="create" class="login-btn">Registrar</button>
            </div>

            <router-link to="/login" class="gologin">Já tenho uma conta</router-link>
        </div>
        <div class="alert" v-show="passwordError">
            A senhas não conferem
            <button @click="passwordError = false">Ok</button>
        </div>
    </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import * as fb from "../plugins/firebase";
const auth = getAuth();
export default {
    data() {
        return {
            user: {},
            passwordError: false,
            sign: false,
        };
    },

    methods: {
        redirect() {
            this.$router.push({name: "login"});
        },
        reset() {
            this.user = {};
        },
        PegarUid() {
            this.uid = fb.auth.currentUser.uid;
            this.AddUserInfo();
        },
        async login() {
            await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
            this.$router.push({name: "calculator"});
        },
        async create() {
            if (this.user.password === this.user.password2) {
                await createUserWithEmailAndPassword(auth, this.user.email, this.user.password);
                this.PegarUid();
            } else {
                this.passwordError = true;
                this.user.password2 = "";
                setTimeout(() => {
                    this.passwordError = false;
                }, 5000);
            }
        },
        async AddUserInfo() {
            await fb.profileCollection.add({
                nome: this.user.nome,
                data_nasc: this.user.data_nasc,
                entrou_em: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
                email: this.user.email,
                owner: this.uid,
            });
            this.login();
        },
    },
};
</script>

<style scoped>
body {
    padding: 0;
    margin: 0px;
}
.escuro {
    filter: blur(5px);
    pointer-events: none;
}
input {
    border: 0;
    border: 1px solid #9e9e9e;
    outline: none;

    box-sizing: border-box;
    transition: 0.5s;
}
input:focus {
    border: 1px solid black;
}
button {
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 200px;
    margin: 1rem;
    background-color: #888888;
    color: white;
    font-size: 1.2rem;
    transition: 0.5s;
}
button:hover {
    background-color: #88888875;
}

label {
    font-weight: 700;
    color: #888888;
}

.container {
    /* border: solid 1px; */
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form {
    /* border: solid 1px; */
    margin: auto;
    width: 500px;

    display: flex;
    flex-direction: row;
    justify-content: center;
}

.user-info,
.login {
    width: 500px;
}
.login {
    display: flex;
    flex-direction: column;
}
.user-info {
    display: flex;
    flex-direction: column;
}

.info {
    /* border: solid 1px; */
    text-align: center;
}
h1 {
    font-size: 3rem;
    color: #3b3b3b;
}
h2 {
    color: #0099ff;
}

.gologin {
    color: #0099ff;
}

.alert {
    width: 250px;
    height: 70px;

    background-color: white;
    color: #0099ff;
    text-align: center;
    font-size: 1.2rem;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.53);

    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
}
.alert button {
    background-color: #0099ff;
}
</style>
