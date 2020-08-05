
<template>
    <div>
        <nav>
            <ul>
                <li><img src="../assets/logo.svg" alt="logo"></li>
                <li><router-link to="/" class="main-nav-router-link active-router-link">home</router-link></li>
                <li><router-link to="/contact" class="main-nav-router-link">contact</router-link></li>
                <li><router-link to="/about" class="main-nav-router-link">about</router-link></li>
                <li><router-link to="/login" class="main-nav-router-link">log in</router-link></li>                                                           
            </ul>
        </nav>
    </div>    
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
          
    })
    export default class MainNavigationBar extends Vue {

    }
</script>


<style lang="scss" scoped>
    @import '../scss/variables.scss';

    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 15vh;
        width: 100vwl;
        display: flex;
        align-items: center;
        background-color: $darkgray;
        ul {
            margin-left: 3vw;
            display: flex;
            list-style-type: none;
            align-items: center;
            li {                    
                cursor: pointer;  
                .main-nav-router-link {
                    font-size: 1em; 
                    margin-left: 5vw;
                    color: #DAD4D4;
                    &:hover {
                        font-style: italic;
                    }
                    text-decoration: none;
                }
                .active-router-link {
                    color: #FFBFBF;
                }                                        
            }
        }
    }
</style>