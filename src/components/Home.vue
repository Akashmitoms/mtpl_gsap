<template>
  <section class="section1">
    <div class="sec1">
      <img src="\image\mitoms\randa-marzouk-ilwI-AIAQr4-unsplash.jpg" alt="" />
      <!-- <img src="\image\mitoms\jakub-zerdzicki-sKhzb1uyBDU-unsplash.jpg" alt="" /> -->
      <div class="sec1_con">
        <h1>Empowering Businesses <br> with Digital Excellence</h1>
        <p>
          Innovative Web and Mobile Solutions to Drive Growth and Connectivity
        </p>
        <button class="btn">Get a Free Consultation</button>
      </div>
    </div>
  </section>
  <section class="section2">
    <container class="sec2">
      <div class="sec_head">
        <img class="image" src="\image\icons\icons8-design-100.png" alt="" />
        <h2>DESIGN</h2>
      </div>
      <div class="v_line"></div>
      <div class="sec_head">
        <img class="image" src="\image\icons\icons8-circuit-100.png" alt="" />
        <h2>TECHNOLOGY</h2>
      </div>
      <div class="v_line"></div>
      <div class="sec_head">
        <img class="image" src="\image\icons\icons8-marketing-100.png" alt="" />
        <h2>MARKETING</h2>
      </div>
    </container>
  </section>
  <section class="section_pin">
    <div class="sec3_container">
      <div class="sec3a">
        <h2>Our Vision</h2>
        <h1>Shaping the Future with Cutting-Edge Technology</h1>
        <p>
          Our vision is to make technology accessible and empowering for
          everyone, regardless of background or business size. We aim to drive
          digital transformation by providing innovative and tailored solutions
          that help people and businesses unlock their full potential.
        </p>
      </div>
      <div class="sec3b">
        <h2>Our Mission</h2>
        <h1>Empower Businesses Through Innovative Web and Mobile Solutions</h1>
        <p>
          To empower businesses through innovative web and mobile solutions that
          drive growth, efficiency, and connectivity. By harnessing the power of
          leading-edge technologies, we deliver custom, user-centric
          applications that transform the digital experience
        </p>
      </div>
      <div class="sec3c">
        <h2>Our Values</h2>
        <h1>
          Our core values paint a comprehensive picture of our organization.
        </h1>
        <p>
          Our vision is to make technology accessible and empowering for
          everyone, regardless of background or business size. We aim to drive
          digital transformation by providing innovative and tailored solutions
          that help people and businesses unlock their full potential.
        </p>
      </div>
    </div>
  </section>
  <HomeComponent />
</template>

<script>
import HomeComponent from "./HomeComponent.vue";
import { gsap } from "gsap";
import { _horizontal } from "gsap/Observer";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "Home",
  components: {
    HomeComponent,
  },

  methods: {
    // sideScroll() {
    //   gsap.to(".sec3_container", {
    //     transform: "translateX(-120%)",
    //     delay: 1,
    //     scrollTrigger: {
    //       trigger: ".section_pin",
    //       markers: true,
    //       start: "top 0%",
    //       end: "bottom 0%",
    //       scrub: 1,
    //       pin: true,
    //     },
    //   });
    // },
    horizontalScroll() {
      const sec3_container = document.querySelector(".sec3_container");
      let width = sec3_container.offsetWidth;
      console.log(width);
      function getScrollAmount() {
        let width = sec3_container.scrollWidth;
        console.log( "scrollAmount", width);
        return -(width - window.innerWidth);
      }

      const tween = gsap.to (sec3_container, {
        x : getScrollAmount(),
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".section_pin",
        start: "top 20%",
        end: () => `+=${sec3_container.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: tween,
        markers: true,
      })
    }
    
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    // this.sideScroll();
    this.horizontalScroll();
  },
};
</script>

<style scoped>
body {
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
  position: relative;
  z-index: 1;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.sec1_con {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  margin-top: 3%;
}
.sec1_con h1 {
  font-size: 4vw;
  font-weight: 700;
}
.sec1_con p {
  margin: 7% 0;
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
.sec3a,
.sec3b,
.sec3c {
  width: 98%;
  padding: 7% 1% 2% 5%;
  margin: 1%;
  border-radius: 20px;
  flex-shrink: 0;
}
.sec3a{
  background-color: whitesmoke;
  border: 1vw solid rgb(229, 228, 228);
}
.sec3b {
  background-color: #1d2a34;
  color: white;
  border: 1vw solid #0d1e2b;
}
.sec3c {
  background-color: #f96227;
  color: white;
  border: 1vw solid #f85210;
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
  font-size: 2rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  margin: 5% 0;
}
.sec3_container p {
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 2%;
}
@media screen and (max-width: 1200px) and (min-width: 701px) {
  .sec_head h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .image {
    width: 45px;
    padding: 0.5rem;
  }
}
@media screen and (max-width: 700px) {
  .sec1_con h1 {
    font-size: 5vw;
    white-space: nowrap;
  }
  .sec1_con p {
    font-size: 3.4vw;
  }
  .btn {
    font-size: 2.8vw;
  }
  .sec2 {
    flex-direction: column;
  }
  .sec_head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2% 5%;
  }
  .v_line {
    display: none;
  }
}
</style>
