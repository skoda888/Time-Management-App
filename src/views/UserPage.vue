
<template>
    <div id="user-page">
        <h1>Today</h1>
        <to-do-list-container id="initial-to-do-list-container"></to-do-list-container>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ToDoListContainer from '../components/ToDoList/ToDoListContainer.vue'

    @Component({
        components: {
            'to-do-list-container': ToDoListContainer
        }
    })
    export default class UserPage extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import '../scss/variables.scss';
    #user-page {
        width: 100%;
        height: 100vh;
        background-color: $darkgray;
        $left-indentation: 15vh;
        h1 {    
            margin-left: $left-indentation;
            padding-top: 20vh;
            color: white;
        }
        #initial-to-do-list-container {
            margin-left: $left-indentation;
            margin-top: 6vh;
        }
    }
</style>