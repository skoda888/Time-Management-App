
<template>
    <div>
        <router-view></router-view>
    </div>    
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import HomePage from './components/HomePage.vue'

    @Component({
        components: {
            'home-page': HomePage,
        }
    })
    export default class MyComponent extends Vue {

    }
</script>


<style lang="scss" scoped>

</style>