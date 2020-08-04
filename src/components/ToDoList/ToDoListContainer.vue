<template>
    <div>
        <div id="to-do-list-container">
            <h3>TO DO</h3>
            <ul>
                <li><to-do-list-item></to-do-list-item></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import ToDoListItem from "./ToDoListItem.vue"

    @Component({
        components: {
            'to-do-list-item': ToDoListItem
        }
    })
    export default class ToDoListContainer extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import '../../scss/variables.scss';

    #to-do-list-container {
        background-color: $pink;
        height: 30vh;
        width: $list-container-width;
    }
    h3 {
        color: $darkgray;
        background-color: transparent;
        padding-left: 1vw;
        padding-top: 3vh;
        font-weight: bold;
    }
    ul {
        background-color: transparent;
        list-style-type: none;
        display: flex;
        li {
            margin: 1vh auto;
        }
    }
    
</style>