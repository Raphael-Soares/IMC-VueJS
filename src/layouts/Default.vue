<template>
    <div id="app">
        <div class="header">
            <router-link :to="i.to" v-for="i of header" :key="i.title" :class="i.class">{{ i.title }}</router-link>
        </div>
        <div class="content"><router-view></router-view></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            header: [
                {title: "Calculadora", class: "header-item", to: "/calculator"},
                {title: "Histórico", class: "header-item", to: "/history"},
                {title: "Perfil", class: "header-item", to: "/profile"},
                {title: "Sair", class: "header-item logout", to: "/login"},
            ],
        };
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bakbak+One&family=Comic+Neue&family=Open+Sans&display=swap");
* {
    text-decoration: none;
    font-family: "Trebuchet MS", sans-serif;
}
body {
    padding: 0;
    margin: 0;
}
.header {
    margin: auto;
    margin-bottom: 20px;
    width: 70%;

    display: flex;
    flex-direction: row;

    align-items: center;
    padding: 1rem;
}

.header-item {
    color: black;
    margin-left: 2rem;
    text-decoration: underline 2px;
    font-size: 1.1rem;
    text-underline-position: under;
    transition: 0.5s;
}
.header-item:hover {
    color: #0099ff;
    text-decoration: underline 2px;
}

.logout {
    margin-left: auto;
    margin-right: 0;
}

.title {
    font-size: 1.2rem;
    color: #0099ff;
}

.content {
    margin: auto;
    width: 70%;
}
</style>
