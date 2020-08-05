
<template>
    <div>
        <div id="new-task-form">
            <h3> CONFIGURE TASK</h3>
            <div id="input-form">
                <p>Title</p>
                <input type="text" placeholder="eg. Feed my golden fish." v-model="title">
            </div>
            <button class="button-no-background-pink-border" v-on:click="onClickDoneButton()">Done</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class NewTaskForm extends Vue {
        title = "";        

        onClickDoneButton(): void {
            if (this.title == "") {
                this.title = "No Title"
            }
            this.$emit('taskConfigurationSet', this.title)
            this.title = "";
        }
    }
</script>

<style lang="scss" scoped>
    $form-width: 30vw;

    #new-task-form {
        height: 30vh;
        width: $form-width;
        color: white;
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
        padding-left: 0.5vw;
        font-size: 1em;
        &:focus {
            outline: none;
        }
    }
    ::placeholder {
         color: rgb(172, 172, 172);
    } 
    h3 {
        margin-top: 3vh;
        word-spacing: 0.12em;
    }

    #input-form {
        padding-top: 4vh;
    }

    button {
        height: 6vh;
        margin-top: 2vh;
        width: calc(#{$form-width} / 2.2);
        font-size: 1em;
    }
</style>