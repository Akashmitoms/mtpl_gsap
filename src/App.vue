<template>
  <Header />
  <Home/>
  <HomeComponent/>

</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    HomeComponent,
  }
};
</script>