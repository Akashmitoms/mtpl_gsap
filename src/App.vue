<template>
  <Header v-if="!mobileView" />
  <MobileHeader v-if="mobileView" />
  <router-view />
  
  <Footer/>

</template>

<script>
import Header from './components/Header.vue'
import MobileHeader from './components/MobileHeader.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import router from './router';

export default {
  name: 'App',
  components: {
    Header,
    MobileHeader,
    Footer,
  },
  data() {
    return {
      mobileView: false,
    };
  },
  methods: {
    checkMobileView() {
      if (window.innerWidth <= 1200) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    },
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  }
};
</script>