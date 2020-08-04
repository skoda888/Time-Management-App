
<template>
    <div>
        <main-navigation-bar></main-navigation-bar>
        <h1>Today</h1>
        <!-- <list-container id="default-container"></list-container> -->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    // import ListContainer from './ListContainer.vue'

    @Component({
        components: {
            //'list-container': ListContainer
        }
    })
    export default class UserPage extends Vue {

    }
</script>

<style lang="scss" scoped>
    div {
        $left-indentation: 15vh;
        h1 {    
            margin-top: 20vh;
            margin-left: $left-indentation;
            color: white;
        }
        #default-container {
            margin-top: 10vh;  
            margin-left: $left-indentation;
        }
    }
</style>