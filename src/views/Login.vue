<template>
    <div id="app">
        <div class="container" v-bind:class="{escuro: errorLogin, escuro: signin}">
            <div class="info">
                <h1>IMC VueJS</h1>
                <h2>Login</h2>
            </div>
            <div class="form">
                <label for="email">Insira seu email</label>
                <input type="email" v-model="user.email" id="email" />
                <label for="password">Insira sua senha</label>
                <input type="password" v-model="user.password" id="password" />
                <button @click="login">Entrar</button>
            </div>
            <div class="bottom">
                <router-link to="/signin" class="gosign">Não tem uma conta? registre-se</router-link>
            </div>
        </div>

        <div class="alert" v-show="signin">
            <span> Conta nao encontrada. Deseja se registrar? </span>
            <div><button @click="redirect">Sim</button> <button @click="signin = false">Não</button></div>
        </div>
        <div class="alert" v-show="errorLogin">
            <span> usuario ou senha invalidos</span>
            <div><button @click="errorLogin = false">Ok</button></div>
        </div>
    </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
const auth = getAuth();
export default {
    data() {
        return {
            user: {},
            signin: false,
            errorLogin: false,
        };
    },
    methods: {
        redirect() {
            this.$router.push({name: "signin"});
        },
        reset() {
            this.user = {};
        },
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
                this.$router.push({name: "calculator"});
            } catch (error) {
                const errorCode = error.code;
                switch (errorCode) {
                    case "auth/wrong-password":
                        this.errorLogin = true;
                        this.ClearPass();
                        break;
                    case "auth/invalid-email":
                        this.errorLogin = true;
                        this.ClearPass();
                        break;
                    case "auth/user-not-found":
                        this.signin = true;
                        break;
                    default:
                        this.errorLogin = true;
                        break;
                }
            }
        },
        async create() {
            await createUserWithEmailAndPassword(auth, this.user.email, this.user.password);
            this.login();
        },
        ClearPass() {
            this.user.password = "";
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
    margin-top: 1rem;
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
    flex-direction: column;
    justify-content: center;
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

.gosign {
    color: #0099ff;
}
.bottom {
    padding: 5px;
}

.alert {
    width: 300px;
    height: 75px;

    background-color: white;
    color: #0099ff;
    text-align: center;
    font-size: 1.2rem;
    padding: 25px;
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
    width: 100px;
    margin: 15px;
}
</style>
