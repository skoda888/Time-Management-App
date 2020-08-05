<template>
    <div>
        <div id="to-do-list-container">
            <h3>TO DO</h3>
            <ul>
                <li v-for="task in example_tasks" v-bind:key="task.id"><to-do-list-item v-bind:text="task.text"></to-do-list-item></li>
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
        example_tasks = [
            { id: 1, text: "Do the groceries", dueTime: "2020/08/05" },
            // { id: 2, text: "Help my lil bro", dueTime: "2020/08/09" },
            // { id: 3, text: "Take a walk", dueTime: "2020/08/06" }
        ]
    }
</script>

<style lang="scss" scoped>
    @import '../../scss/variables.scss';

    #to-do-list-container {
        background-color: $pink;
        height: $list-container-initial-height;
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