
<template>
    <div>
        <div id="new-task-form">
            <h3> CONFIGURE TASK</h3>
            <div id="input-form">
                <p>Title</p>
                <input type="text" name="new-task-title" id="new-task-title">
            </div>
            <button class="button-no-background-pink-border">DONE</button>
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
    $form-width: 30vw;

    #new-task-form {
        height: 30vh;
        width: $form-width;
        color: $white;
        background-color: $darkgray;
        display: flex;
        align-items: center;
        flex-direction: column;
        outline-style: dotted;
        outline-color: $white;
    }
    input {
        margin-top: 1vh;
        border: none;
        width: calc(#{$form-width} / 1.5);
        height: 4vh;
    }
    h3 {
        margin-top: 3vh;
    }

    #input-form {
        padding-top: 4vh;
    }

    button {
        padding: 0.8em;
        margin-top: 2vh;
        width: calc(#{$form-width} / 2.2);
    }
</style>