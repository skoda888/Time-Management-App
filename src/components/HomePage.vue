
<template>
    <div>
        <main-navigation-bar></main-navigation-bar>

        <section id="landing-page">
            <img src="../assets/img-laptop.jpg" alt="laptop">
            <h1>TIME IS PRICELESS. MANAGE IT.</h1>
            <button>Get Started</button>
        </section>

        <section id="about-page">
        </section>
    </div>    
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import MainNavigationBar from './MainNavigationBar.vue'

    @Component({
        components: {
            'main-navigation-bar': MainNavigationBar,
        }
    })
    export default class MyComponent extends Vue {

    }
</script>


<style lang="scss" scoped>
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
            font-weight: 100;
            color: #DAD4D4;
            width: 60%;
            top: 50.5%;
            left: 8%;
            letter-spacing: 0.3vw;
        }
        button {
            background-color: transparent;
            position: absolute;
            padding: 2vh 7vw;
            color: #FFBFBF; 
            border: 1.5px solid #FFBFBF;
            font-size: 1.15em;
            top: 82%;
            left: 47.5%;
            outline: none;
            transition: 0.3s ease-in;
            cursor: pointer;
            &:hover {
                background-color: #FFBFBF;
                color: #2A2A2A;
            }
        }
    }
</style>