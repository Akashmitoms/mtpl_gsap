<template>
  <header>
    <h5>Our Expertise</h5>
    <h1>Innovative IT Solutions <br />Tailored for Every Business</h1>
  </header>
  <article>
    <nav>
      <p :class="{active: design}" @click="activeDesign">DESIGN</p>
      <p :class="{active: technology}" @click="activeTechnology">TECHNOLOGY</p>
      <p :class="{active: business}" @click="activeBusiness">BUSINESS</p>
    </nav>
    <div class="graphic_container" v-if="design">
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>01</p>
            <h5>GRAPHIC</h5>
          </span>
          <h2>UI/UX Design</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur
            curae senectus, dui arcu eu convallis fringilla primis tincidunt
            neque ac dictum
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/img 1.png" alt="" />
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
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat
            sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="\image\mitoms\pete-pedroza-xITnxxlzGAE-unsplash.jpg" alt="" />
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
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat
            sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/img 3.png" alt="" />
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
          <h2>Web Development</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur
            curae senectus, dui arcu eu convallis fringilla primis tincidunt
            neque ac dictum
          </h6>
        </div>
        <div class="sub_con1">
          <img src="/image/img 4.jpeg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>02</p>
            <h5>TECHNOLOGY</h5>
          </span>
          <h2>Mobile Application Development</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis,
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat
            sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="\image\mitoms\boliviainteligente-5b9Lr-ggr0E-unsplash.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>03</p>
            <h5>TECHNOLOGY</h5>
          </span>
          <h2>Software Development</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis,
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat
            sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="\image\mitoms\jakub-zerdzicki-sKhzb1uyBDU-unsplash.jpg" alt="" />
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
          <h2>SEO & Digital Marketing</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur
            curae senectus, dui arcu eu convallis fringilla primis tincidunt
            neque ac dictum
          </h6>
        </div>
        <div class="sub_con1">
          <img src="\image\mitoms\merakist-l5if0iQfV4c-unsplash.jpg" alt="" />
        </div>
      </div>
      <div class="graphic_con">
        <div class="sub_con">
          <span>
            <p>02</p>
            <h5>BUSINESS</h5>
          </span>
          <h2>E-Commerce Solutions</h2>
          <h6>
            Curae risus sociis ultricies scelerisque libero malesuada primis,
            ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat
            sagittis volutpat
          </h6>
        </div>
        <div class="sub_con1">
          <img src="\image\mitoms\alexander-shatov-mr4JG4SYOF8-unsplash.jpg" alt="" />
        </div>
      </div>
     
    </div>
    <section class="section2">
      <div class="sec32 common_padding">
        <h2>Why Mitoms Technologies?</h2>
        <h3>
          Partner with us for innovative, reliable, and tailored IT solutions
          that drive your business forward.
        </h3>
        <div class="sec32_container">
          <div class="sec32_con">
            <h3>Innovative Technologies</h3>
            <p>
              At Mitoms Technologies, we utilize the latest technologies like
              Vue.js, Laravel, and cloud-based solutions to create scalable,
              high-performance applications. We’re always pushing the boundaries
              of what’s possible in the digital space.
            </p>
          </div>
          <div class="sec32_con">
            <h3>Expert Team</h3>
            <p>
              Our team of seasoned developers and designers have years of
              experience in delivering customized solutions for clients across
              diverse industries. We pride ourselves on the quality, creativity,
              and expertise we bring to every project.
            </p>
          </div>
          <div class="sec32_con">
            <h3>Custom Solutions</h3>
            <p>
              We don’t believe in one-size-fits-all solutions. Our approach is
              to understand your business needs and provide tailored IT
              solutions that solve your unique challenges and help you achieve
              your goals.
            </p>
          </div>
        </div>
        <div class="sec32_container1">
          <h6>
            <span class="tick_a"
              ><font-awesome-icon :icon="['fas', 'check']" /></span
            >500+ Projects Delivered.
          </h6>
          <h6>
            <span class="tick_a"
              ><font-awesome-icon :icon="['fas', 'check']" /></span
            >98% Client Satisfaction Rate
          </h6>
        </div>
        <div class="sec32_container1">
          <h6>
            <span class="tick_a"
              ><font-awesome-icon :icon="['fas', 'check']" /></span
            >10+ Years of Experience
          </h6>
          <h6>
            <span class="tick_a"
              ><font-awesome-icon :icon="['fas', 'check']" /></span
            >Global, Multi-industry Clientele.
          </h6>
        </div>
      </div>
    </section>
    <section class="common_padding">
      <div class="sec2">
        <div class="sec2a">
          <h2>Our Featured Solutions</h2>
          <p>
            Discover how Mitoms Technologies is transforming businesses through
            innovative digital solutions tailored to meet unique challenges.
          </p>
        </div>
        <div class="sec2b">
          <div class="sec2b_sub">
            <img src="/image/world1.jpg" alt="" />
            <div class="sec2b_sub_con">
              <h3>Sourcing Desk:</h3>
              <h5>Empowering HR Management with Digital Transformation</h5>
            </div>
          </div>
          <div class="sec2b_sub">
            <img src="/image/world2.jpg" alt="" />
            <div class="sec2b_sub_con">
              <h3>MVTL:</h3>
              <h5>
                Revolutionizing Logistics with a Centralized Digital Platform
              </h5>
            </div>
          </div>
          <div class="sec2b_sub">
            <img src="/image/world3.jpg" alt="" />
            <div class="sec2b_sub_con">
              <h3>Avanika:</h3>
              <h5>Delivering Seamless E-Commerce Experiences</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="sec32 common_padding">
        <h2>Join Our Team</h2>
        <h3>
          At Mitoms Technologies, we’re always looking for talented and
          passionate individuals to join our growing team. If you’re driven by
          innovation and want to be part of cutting-edge projects, we’d love to
          hear from you.
        </h3>
        <div class="sec32_container">
          <div class="sec32_con">
            <h3>Full Stack Developer</h3>
            <p>
              We’re looking for an experienced Full Stack Developer to work on
              exciting web and mobile applications. If you’re proficient in
              Vue.js, Laravel, and RESTful APIs, apply now!
            </p>
            <button>View Job Description & Apply</button>
          </div>
          <div class="sec32_con">
            <h3>UI/UX Designer</h3>
            <p>
              Are you passionate about creating seamless, user-friendly designs?
              We’re hiring a UI/UX Designer to help shape the look and feel of
              our innovative digital solutions.
            </p>
            <button>View Job Description & Apply</button>
          </div>
          <div class="sec32_con">
            <h3>SEO Specialist</h3>
            <p>
              Help our clients boost their online visibility! We’re seeking an
              SEO Specialist with a strong understanding of search engine
              algorithms, keyword research, and digital marketing strategies.
            </p>
            <button>View Job Description & Apply</button>
          </div>
        </div>
        <div class="sec32_container">
          <div class="sec32_con">
            <h3>Project Manager</h3>
            <p>
              We’re in need of a Project Manager with experience in leading
              cross-functional teams and managing IT projects. Join us in
              delivering innovative solutions to clients worldwide.
            </p>
            <button>View Job Description & Apply</button>
          </div>
        </div>
        <br />
        <div class="inner_join">
        <h3>
          "Don’t see your role listed? We’re always on the lookout for great
          talent."
        </h3>
        <button>Submit Your Resume</button>
      </div>
        <div class="sec32_con_work">
        <h2>Why Work with Us?</h2>
        <ul>
          <li>
            <span class="icon_right"><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            Innovative Projects: Work on exciting, cutting-edge digital
            solutions for clients across the globe.
          </li>
          <li>
            <span class="icon_right"><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            Growth Opportunities: We’re committed to helping our team members
            grow in their careers through continuous learning and skill
            development.
          </li>
          <li>
            <span class="icon_right"><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            Great Culture: Join a team of passionate, collaborative
            professionals who are dedicated to delivering excellence.
          </li>
        </ul>
      </div>
      </div>
    </section>
    <section class="common_padding sec42">
      <h2>Stay Updated with the <br>Latest Industry Insights</h2>
      <h3>
        Explore our blog for expert tips, industry trends, and success stories
        that help businesses stay ahead of the curve.
      </h3>
      <div class="sec42_container">
        <div class="sec42_con">
          <img src="/image/blog1.jpg" alt="">
          <h4>Blog Post 1</h4>
          <p>
            The Future of Web Development: Trends for 2025 As technology
            evolves, so does the world of web development. Discover the upcoming
            trends in web and mobile development that will shape the future of
            the digital landscape.
          </p>
          <button>Read More</button>
        </div>
        <div class="sec42_con">
          <img src="/image/blog2.jpg" alt="">
          <h4>Blog Post 2</h4>
          <p>
            The Future of Web Development: Trends for 2025 As technology
            evolves, so does the world of web development. Discover the upcoming
            trends in web and mobile development that will shape the future of
            the digital landscape.
          </p>
          <button>Read More</button>
        </div>
        <div class="sec42_con">
          <img src="/image/blog3.jpg" alt="">
          <h4>Blog Post 3</h4>
          <p>
            The Future of Web Development: Trends for 2025 As technology
            evolves, so does the world of web development. Discover the upcoming
            trends in web and mobile development that will shape the future of
            the digital landscape.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "HomeComponent",

  data() {
    return {
      design: true,
      technology: false,
      business: false,
      
    };
  },
  methods: {
    activeDesign() {
      this.design = true;
      this.technology = false;
      this.business = false;
    },
    activeTechnology() {
      this.design = false;
      this.technology = true;
      this.business = false;
    },
    activeBusiness() {
      this.design = false;
      this.technology = false;
      this.business = true;
    },
  },
};
</script>

<style scoped>
.active {
  opacity: 1;
}
.icon_right{
  color: #F96227;
  margin-right: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}
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
  text-align: center;
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
.sec2 {
  display: flex;
}
.sec2a {
  width: 40%;
}
.sec2b {
  width: 60%;
  display: flex;
  gap: 1%;
  justify-content: space-evenly;
}
.sec2b_sub {
  width: 30%;
  position: relative;
}
.sec2b_sub_con {
  position: absolute;
  padding: 4%;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 2rem;
}
.sec2b_sub_con h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 1% 0;
  opacity: 1;
  text-decoration: underline;
}
.sec2b_sub_con h5 {
  font-size: 1rem;
  font-weight: 400;
  opacity: 1;
  text-align: left;
}
.sec2b_sub img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.sec2b_sub:hover {
  opacity: 0.5;
  cursor: pointer;
}
.sec2 h2 {
  font-size: 3rem;
  font-weight: 900;
  margin: 5% 0;
}
.sec2 p {
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.7;
}
.sec32 {
  background-color: #1d2a34;
  border-radius: 20px;
}
.sec32 h2 {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin: 2% 0;
}
.sec32 h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  opacity: 0.7;
}
.sec32 h6 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-top: 2%;
}
.sec32_container {
  display: flex;
  justify-content: space-between;
  gap: 2%;
  margin-top: 5%;
}
.sec32_container1 {
  display: flex;
  gap: 15%;
  margin-top: 2%;
}
.tick_a {
  display: inline-block;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  padding: 0.8rem 1rem;
  background-color: #f96227;
  border-radius: 50%;
}
.sec32_con {
  position: relative;
  width: 30%;
  padding: 2%;
  background-color: #29353e;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sec32_con_work {
  position: relative;
  padding: 2%;
  background-color: #29353e;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.inner_join{
  padding: 2%;
  margin: 5% 0;
}
.inner_join h3 {
  font-size: 2rem;
  font-weight: 500;
  color: white;
  opacity: 0.8;
}
.sec32_con h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  opacity: 1;
  margin: 3% 0;
}
.sec32_con p {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  margin-top: 1rem;
  word-spacing: 1px;
  line-height: 1.4;
}
.sec32_con button {
  background-color: #f96227;
  color: white;
  padding: 2% 3%;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
}
.sec32_con button:hover {
  background-color: transparent;
  border: 2px solid #f96227;
  font-weight: bold;
}
button {
  background-color: #f96227;
  color: white;
  padding: 1% 2%;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: transparent;
  border: 2px solid #f96227;
  font-weight: bold;
}
.sec32 ul {
  list-style: none;
  padding: 1rem;
}
.sec32 ul li {
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  margin: 1rem 1rem;
}
.sec42 h2{
  font-size: 3rem;
  font-weight: 900;
  margin: 2% 0;
}
.sec42 h3{
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.7;
}
.sec42_container{
  display: flex;
  justify-content: space-between;
  gap: 2%;
  margin-top: 5%;
}
.sec42_con{
  width: 30%;
  padding: 2%;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sec42_con h4{
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  opacity: 0.7;
  margin: 3% 0;
}
.sec42_con p{
  font-size: 1rem;
  font-weight: 400;
  color: black;
  margin-top: 1rem;
  word-spacing: 1px;
  line-height: 1.4;
}
.sec42_con button{
  background-color: #1D2A34;
  color: white;
  padding: 2% 3%;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
}
@media screen and (max-width: 1200px) and (min-width: 700px) {
  .graphic_con {
    flex-direction: column;
    gap: 3rem;
  }
  .sub_con {
    width: 100%;
  }
  .sub_con1 {
    width: 100%;
  }
  .sec32_container {
    flex-direction: column;
    gap: 3rem;
  }
  .sec32_container1 {
    flex-direction: column;
    gap: 3rem;
  }
  .sec32_con {
    width: 100%;
  }
  .sec42_container{
    flex-direction: column;
    gap: 3rem;
  }
  .sec42_con{
    width: 100%;
  }
  
}

@media screen and (max-width: 700px) {
  .graphic_con {
    margin-top: 2rem;
    padding: 2%;
    flex-direction: column;
    gap: 3rem;
  }
  .sub_con {
    width: 100%;
    gap: 0.5rem;
  }
  .sub_con h2 {
    font-size: 2rem;
  }
  .sub_con1 {
    width: 100%;
    height: auto;
  }
  header h1 {
    font-size: 1.6rem;
  }
  nav p {
    font-size: 1rem;
  }
  .sec2 {
    flex-direction: column;
    gap: 2rem;
  }
  .sec2a,
  .sec2b {
    width: 100%;
  }
  .sec32_container {
    flex-direction: column;
    gap: 3rem;
  }
  .sec32_container1 {
    flex-direction: column;
    gap: 3rem;
  }
  .sec32_con {
    width: 100%;
  }
  .sec42_container{
    flex-direction: column;
    gap: 3rem;
  }
  .sec42_con{
    width: 100%;
  }
  .common_padding {
    padding: 2%;
  }
  .sec32 h2 {
    font-size: 2rem;
  }
  .sec32 h3 {
    font-size: 1.2rem;
  }
  .sec32 h6 {
    font-size: 1.2rem;
  }
  .sec32_con h3 {
    font-size: 1.2rem;
  }
  .sec32_con p {
    font-size: 1rem;
  }
  .sec32_container1{
    flex-direction: column;
    gap: 0.5rem;
  }
  .sec32 ul li {
    font-size: 1rem;
  }
  .sec42 h2{
    font-size: 2rem;
  }
  .sec42 h3{
    font-size: 1rem;
  } 
  .sec2 h2 {
    font-size: 2rem;
  }
  .sec2 p {
    font-size: 1rem;
  }
  .tick_a {
    font-size: 1.2rem;
  }
}
</style>
