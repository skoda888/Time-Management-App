
<template>
    <div>
        <div id="to-do-list-item">

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class ToDoListItem extends Vue {
        
    }
</script>

<style lang="scss" scoped>
    @import '../../scss/variables.scss';

    #to-do-list-item {
        background-color: $darkgray;
        width: 13vw;
        height: 8vh;
        border-radius: 20px;
        overflow: hidden;
    }   
</style>