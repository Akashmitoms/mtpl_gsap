<template>
  <header>
    <h5>OUR PORTFOLIO</h5>
    <h1>CREATIVE PORTFOLIO</h1>
  </header>
  <article>
    <nav>
      <p @click="activeDesign">DESIGN</p>
      <p @click="activeTechnology">TECHNOLOGY</p>
      <p @click="activeBusiness">BUSINESS</p>
    </nav>
    <div class="graphic_container" v-if="design">
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>01</p>
            <h5>GRAPHIC</h5>
          </span>
          <h2>Logo – Identity</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur
            curae senectus, dui arcu eu convallis fringilla primis tincidunt
            neque ac dictum
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image11.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>02</p>
            <h5>GRAPHIC</h5>
          </span>
          <h2>Business & Advertising</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis, 
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image12.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>02</p>
            <h5>GRAPHIC</h5>
          </span>
          <h2>Business & Advertising</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis, 
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image13.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="graphic_container" v-if="technology">
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>01</p>
            <h5>TECHNOLOGY</h5>
          </span>
          <h2>Logo – Identity</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur
            curae senectus, dui arcu eu convallis fringilla primis tincidunt
            neque ac dictum
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image21.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>02</p>
            <h5>TECHNOLOGY</h5>
          </span>
          <h2>Business & Advertising</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis, 
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image22.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>03</p>
            <h5>TECHNOLOGY</h5>
          </span>
          <h2>Business & Advertising</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis, 
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image23.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="graphic_container" v-if="business">
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>01</p>
            <h5>BUSINESS</h5>
          </span>
          <h2>Logo – Identity</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur
            curae senectus, dui arcu eu convallis fringilla primis tincidunt
            neque ac dictum
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image31.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>02</p>
            <h5>BUSINESS</h5>
          </span>
          <h2>Business & Advertising</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis, 
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image32.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>03</p>
            <h5>BUSINESS</h5>
          </span>
          <h2>Business & Advertising</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis, 
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/image33.jpg" alt="" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "HomeComponent",

  data () {
    return {
        design: true,
        technology: false,
        business: false
    }
  },
  methods:{
    activeDesign(){
      this.design = true;
      this.technology = false;
      this.business = false;
    },
    activeTechnology(){
      this.design = false;
      this.technology = true;
      this.business = false;
    },
    activeBusiness(){
      this.design = false;
      this.technology = false;
      this.business = true;
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}
header h5 {
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.7;
}
header h1 {
  font-size: 3rem;
  font-weight: 1500;
  font-family: Helvetica;
  margin: 1% 0;
  letter-spacing: 0.1px;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}
nav :nth-child(1) {
  border-radius: 30px 0 0 30px;
}
nav :nth-child(3) {
  border-radius: 0 30px 30px 0;
}
nav p {
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.5;
  cursor: pointer;
  border: 1px solid lightgrey;
  padding: 1% 3%;
}
nav p:hover {
  opacity: 1;
}
.graphic_con {
  display: flex;
  justify-content: space-between;
  padding: 2% 5% 5% 10%;
  gap: 5%;
}
.sub_con {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
}
.sub_con1 {
  width: 50%;
  height: 75vh;
}
.sub_con1 img {
  width: 100%;
    height: 100%;
  object-fit: cover;
  border-radius: 30px;
}
.sub_con span {
  display: flex;
  gap: 2%;
  justify-content: start;
  align-items: center;
}
.sub_con span p {
  font-size: 1.2rem;
  font-weight: 700;
  background-color: lightgrey;
  padding: 3%;
  border-radius: 50%;
}
.sub_con span h5 {
  font-size: 1.2rem;
  font-weight: 700;
}
.sub_con h2 {
  font-size: 3rem;
  font-weight: 900;
  margin: 2% 0;
}
.sub_con h6 {
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.7;
}
</style>
