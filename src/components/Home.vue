<template>
  <section class="section1">
    <div class="sec1">
      <img src="/image/hero.jpg" alt="" />
      <div class="sec1_con">
        <h1>INNOVATING IDEAS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, gravida morbi
          lacus pulvinar libero litora elementum urna
        </p>
      </div>
    </div>
  </section>
  <section class="section2">
    <container class="sec2">
      <div class="sec_head">
        <img class="image" src="/image/digital-printing.png" alt="" />
        <h2>DESIGN</h2>
      </div>
      <div class="v_line"></div>
      <div class="sec_head">
        <img class="image" src="/image/graphics-design.png" alt="" />
        <h2>TECHNOLOGY</h2>
      </div>
      <div class="v_line"></div>
      <div class="sec_head">
        <img class="image" src="/image/social-media.png" alt="" />
        <h2>MARKETING</h2>
      </div>
    </container>
  </section>
  <section class="section_pin">
    <div class="sec3_container">
    <div class="sec3a">
      <h2>Vision</h2>
      <h1>Identity <br> Development</h1>
      <p>
        Magna enim lobortis laoreet id cras ad tincidunt aliquam, quisque
        torquent posuere facilisis mus nisi velit, mattis vehicula sociis nullam
        penatibus eros nunc.
      </p>
    </div>
    <div class="sec3b">
        <h2>Mission</h2>
      <h1>Identity <br> Development</h1>
      <p>
        Magna enim lobortis laoreet id cras ad tincidunt aliquam, quisque
        torquent posuere facilisis mus nisi velit, mattis vehicula sociis nullam
        penatibus eros nunc.
      </p>
    </div>
    <div class="sec3c">
        <h2>values</h2>
      <h1>Identity <br> Development</h1>
      <p>
        Magna enim lobortis laoreet id cras ad tincidunt aliquam, quisque
        torquent posuere facilisis mus nisi velit, mattis vehicula sociis nullam
        penatibus eros nunc.
      </p>
    </div>
</div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "Home",

  methods:{
    sideScroll(){
      gsap.to(".sec3_container",{
        transform: 'translateX(-120%)',
        delay: 1,
       scrollTrigger: {
          trigger: ".section_pin",
          markers: true,
          start: "top 0%",
          end: "bottom 0%",
          scrub: 1,
          pin: true,
       }
       
         
      })
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.sideScroll();
  },
};
</script>

<style scoped>
body{
  overflow-x: hidden;
}
.section1 {
  padding: 1%;
  margin-top: -8%;
}
.section2 {
  padding: 1%;
}
.section_pin {
  padding: 1%;
}
.sec1 {
  width: 100%;
  height: 95vh;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.sec1_con {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
.sec1_con h1 {
  font-size: 3rem;
  font-weight: 700;
}
.sec1_con p {
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.8;
}
.sec2 {
  display: flex;
  justify-content: space-evenly;
  border-radius: 20px;
  background-color: whitesmoke;
  padding: 1%;
}
.sec_head {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1%;
}
.image {
  width: 70px;
  padding: 1rem;
  background-color: lightgrey;
  border-radius: 50%;
}
.sec_head h2 {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
}
.v_line {
  height: 70px;
  width: 2px;
  background-color: lightgrey;
  margin-top: 1%;
}
.sec3a, .sec3b, .sec3c {
    width: 99vw;
    padding: 10%;
    margin: 1%;
    border-radius: 20px;
}
.sec3b{
    background-color: #1D2A34;
}
.sec3c{
    background-color: #F96227;
}
.sec3_container {
    display: flex;
}
.sec3_container h2 {
    font-size: 1.8rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    opacity: 0.7;
}
.sec3_container h1 {
    font-size: 5rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin: 5% 0;
}
.sec3_container p {
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0.8;
}
@media screen and (max-width: 640px) {
  /* .sec1 img{
    object-fit: contain;
  } */
}
</style>
