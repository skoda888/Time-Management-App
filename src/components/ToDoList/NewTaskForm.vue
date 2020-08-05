
<template>
    <div>
        <div id="new-task-form">
            <input type="text" name="new-task-title" id="new-task-title">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class NewTaskForm extends Vue {
        
    }
</script>

<style lang="scss" scoped>
    #new-task-form {
        height: 50vh;
        width: 50vw;
        background-color: 
    }
</style>