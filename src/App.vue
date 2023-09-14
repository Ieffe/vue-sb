<template>
    <page-header></page-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"> </component>
      </transition>
    </router-view>
</template>

<script>
    import PageHeader from './components/layout/PageHeader.vue'

    export default {
        components: {
            PageHeader
        }
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  height: 100%;
  
}

body {
  margin: 0;
  height: 100%;
}

.route-enter-from{
  opacity: 0;
  transform: translateX(-30px)
}

.route-enter-to, .route-leave-from{
  opacity: 1;
  transform: translateX(0);
}


.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateX(30px)
}


.route-leave-active{
  transition: all 0.3s ease-in;
}




</style>

<style lang="postcss">

</style>