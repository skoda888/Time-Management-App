
<template>
    <div>
        <section id="landing-page">
            <img src="../assets/img-laptop.jpg" alt="laptop">
            <h1>TIME IS PRICELESS. MANAGE IT.</h1>
            <router-link to="/user" tag="button">Get Started</router-link>
        </section>
        
        <section id="about-page">
        </section>
    </div>    
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
    })
    export default class HomePage extends Vue {

    }
</script>


<style lang="scss" scoped>
    div {
        background-color: $darkgray;
    }

    #landing-page {
        height: 100vh;
        width: 100%;
        img {
            float: left;
            position: absolute;
            width: 57%;
            height: 75vh;
            left: 43%;
            top: 0;
        }
        h1 {
            background-color: transparent;
            position: absolute;
            text-align: right;
            font-size: 5.5em;
            color: #DAD4D4;
            width: 60%;
            top: 50.7%;
            left: 8%;
            letter-spacing: 0.3vw;
        }
        button {
            background-color: transparent;
            position: absolute;
            padding: 2vh 7vw;
            color: $pink; 
            border: 1.5px solid $pink;
            font-size: 1.15em;
            top: 82%;
            left: 47.5%;
            outline: none;
            transition: 0.3s ease-in;
            cursor: pointer;
            &:hover {
                background-color: $pink;
                color: #2A2A2A;
            }
        }
    }
</style>