
<template>
    <div>
        <div id="to-do-list-item">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import { Prop } from "vue-property-decorator"

    @Component({})
    export default class ToDoListItem extends Vue {
        @Prop({default: 'Empty task'}) title!: string
    }
</script>

<style lang="scss" scoped>
    #to-do-list-item {
        background-color: $darkgray;
        color: white;
        width: calc(#{$list-container-width} - 2vw);
        height: 10vh;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }   
    p {
        max-width: calc(#{$list-container-width} - 7vw);
        margin-left: 2vw;
        font-weight: bold;
    }
</style>