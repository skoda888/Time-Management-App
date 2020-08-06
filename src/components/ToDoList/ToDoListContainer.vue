<template>
    <div>
        <div id="to-do-list-container">
            <section id="to-do-list-container-header">
                <h3>TO DO</h3>
            </section>

            <section id="to-do-list-container-body" v-bind:style="{ height: '30vh + ' }">
                <ul>
                    <li v-for="task in example_tasks" v-bind:key="task.id">
                        <to-do-list-item v-bind:title="task.title"></to-do-list-item>
                    </li>
                </ul>
                <button class="no-fill-and-round-border" v-on:click="isNewTaskFormDisplayed = true">+ Add new task</button>
            </section>

            <new-task-form v-if="isNewTaskFormDisplayed == true" v-on:taskConfigurationSet="setNewTaskTitle($event)"></new-task-form>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import ToDoListItem from "./ToDoListItem.vue"
    import NewTaskForm from './NewTaskForm.vue'
    // import scssVariables from '../../scss/variables.scss'  

    @Component({
        components: {
            'to-do-list-item': ToDoListItem,
            'new-task-form': NewTaskForm
        }
    })
    export default class ToDoListContainer extends Vue {
        // Data
        isNewTaskFormDisplayed = false
        example_tasks = [
            { id: 1, title: "Do the groceries and don't forget to buy apples and almonds", dueTime: "2020/08/05" },
            // { id: 2, title: "Help my lil bro", dueTime: "2020/08/09" },
            // { id: 3, title: "Take a walk", dueTime: "2020/08/06" }
        ]

        // Computed Properties
        // get currentListContainerHeight() {
        //     //return 30 + (this.example_tasks.length());
        // }

        // Methods
        setNewTaskTitle(event: string): void 
        {
            const tasksLength: number = this.example_tasks.length
            this.example_tasks.push({ id: (tasksLength + 1), title: event, dueTime: "today"});
            this.isNewTaskFormDisplayed = false
        }
    }
</script>

<style lang="scss" scoped>
    #to-do-list-container {
        background-color: $pink;
        //height: $list-container-initial-height;
        width: $list-container-width;
    }

    #to-do-list-container-body {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        margin-top: 2vh;
        li {
            margin: 1vh auto;
        }
    }
    
    .no-fill-and-round-border {
        width: calc(#{$list-container-width} / 2);
        height: 6vh;
        border: 2px solid $darkgray;
        border-radius: 30px;
        margin-top: 2vh;
        background-color: transparent;
        font-size: 1em;
        cursor: pointer;
    }
</style>