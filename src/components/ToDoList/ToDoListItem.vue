
<template>
    <div>
        <div id="to-do-list-item">
            <h4>{{ text }}</h4>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import { Prop } from "vue-property-decorator"

    @Component({})
    export default class ToDoListItem extends Vue {
        @Prop({default: 'Empty task'}) text!: string
    }
</script>

<style lang="scss" scoped>
    @import '../../scss/variables.scss';

    #to-do-list-item {
        background-color: $darkgray;
        color: $white;
        width: 13vw;
        height: 8vh;
        border-radius: 20px;
        overflow: hidden;
    }   
</style>