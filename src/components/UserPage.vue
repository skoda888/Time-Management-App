
<template>
    <div>
        <main-navigation-bar></main-navigation-bar>
        <list-container></list-container>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ListContainer from './ListContainer.vue'

    @Component({
        components: {
            'list-container': ListContainer
        }
    })
    export default class App extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>