<template>
  <div class="container">
  <header>
    <div class="head1">
      <img src="/image/Logo-01.png" alt="" />
    </div>
    <div class="head2">
      <span class="icon" @click="togglePopup"><font-awesome-icon :icon="['fas', 'bars']" /></span>
      
    </div>
  </header>
  <div class="popup" v-if="showPopup">
    <div class="popup_content">
      <!-- <div class="close"><font-awesome-icon :icon="['fas', 'xmark']" /></div> -->
      <ul>
        <router-link to="/" @click="showPopup= false"><li>HOME</li></router-link>
        <router-link to="/aboutUs" @click="showPopup= false"><li>ABOUT US</li></router-link>
        <router-link to="/ourServices" @click="showPopup= false"><li>SERVICES</li></router-link>
        <router-link to="/portfolio" @click="showPopup= false"><li>SOLUTIONS</li></router-link>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "MobileHeader",

    data () {
      return {
        showPopup: false
      }
    },
    methods: {
      togglePopup () {
        this.showPopup = !this.showPopup
      }
    }
  }
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 6%;
  margin-bottom: 4%;
}
.head1 img {
  width: 50%;
}
.head2 {
  display: flex;
  gap: 10%;
  align-items: center;
  justify-content: end;
}
.icon {
  font-size: 1.5rem;
  padding: 15%;
  cursor: pointer;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-bottom: 10px;
  color: black;
  font-weight: 700;
  cursor: pointer;
  background-color: whitesmoke;
}
.popup{
  z-index: 99;
}
.popup_content{
  z-index: 999;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
 margin-top: -5%;
 margin-bottom: 10%;
}
.popup_content ul{
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 99;
  width: 100%;
}
.popup_content ul li{
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.2rem 10vw;
  cursor: pointer;
 text-align: center;
}
.popup_content ul li:hover{
  background-color: lightgrey;
}
a{
  text-decoration: none;
  color: black;
}

/* .close{
  display: block;
  background-color: tomato;
  text-align: center;
} */

@media screen and (max-width: 450px) {
  button {
    padding: 0.5rem 1rem;
    border: none;
    font-size: 1rem;
  }
  .head2 {
    gap: 2%;
  }
  
}

</style>
