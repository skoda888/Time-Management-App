
<template>
    <div>
        <nav>
            <ul>
                <li><img src="../assets/logo.svg" alt="logo"></li>
                <li><router-link id="router-link-home">home</router-link></li>
                <li><router-link>contact</router-link></li>
                <li><router-link>about</router-link></li>
                <li><router-link>log in</router-link></li>                                                           
            </ul>
        </nav>
    </div>    
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
          
    })
    export default class MyComponent extends Vue {

    }
</script>


<style lang="scss" scoped>
    nav {
        position: fixed;
        height: 15vh;
        width: 100vh;
        display: flex;
        align-items: center;
        ul {
            margin-left: 3vw;
            display: flex;
            list-style-type: none;
            align-items: center;
            li {                    
                cursor: pointer;  
                router-link {
                    font-size: 1em; 
                    margin-left: 5vw;
                    color: white;
                    &:hover {
                        font-style: italic;
                    }
                }
                #router-link-home {
                    color: #FFBFBF;
                }                                               
            }
        }
    }
</style>