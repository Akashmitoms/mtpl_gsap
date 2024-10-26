<template>
  <section class="section1">
    <div class="os1">
      <img src="/image/hero.jpg" alt="" />
      <div class="os1_con">
        <h1>Innovative IT Solutions for Every Business</h1>
        <p>
          Custom Web, Mobile, and Software Solutions Tailored for Your Success
        </p>
      </div>
    </div>
  </section>
  <!-- <section class="section2">
    <div class="sec3">
      <div class="head">
        <h5>Laoreet aenean aliquam est</h5>
        <h1>Eros id fames ultricies</h1>
        <p>
          purus magna metus molestie risus congue nam, mus sapien mattis quam
          iaculis ullamcorper curabitur
        </p>
      </div>
      <div class="container3">
        <div class="sec3a">
          <span><font-awesome-icon :icon="['fas', 'pen-nib']" /></span>
          <h2>Ultrices conubia</h2>
          <p>
            Leo suspendisse quisque nisi gravida dignissim libero urna velit
            ligula sed, mus consequat natoque cursus congue nunc
          </p>
        </div>
        <div class="sec3a">
          <span><font-awesome-icon :icon="['fas', 'microchip']" /></span>
          <h2>Ultrices conubia</h2>
          <p>
            Leo suspendisse quisque nisi gravida dignissim libero urna velit
            ligula sed, mus consequat natoque cursus congue nunc
          </p>
        </div>
        <div class="sec3a">
          <span><font-awesome-icon :icon="['fas', 'people-group']" /></span>
          <h2>Ultrices conubia</h2>
          <p>
            Leo suspendisse quisque nisi gravida dignissim libero urna velit
            ligula sed, mus consequat natoque cursus congue nunc
          </p>
        </div>
      </div>
    </div>
  </section> -->
  <section class="section2">
    <div class="os3">
      <div class="head">
        <h1>Our Expertise</h1>
        <p>Innovating for Every Business with Tailored IT Solutions</p>
      </div>
      <div class="container_os3">
        <div class="os3_con">
          <div class="os3_con1">
            <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
            <h2>Web Development</h2>
            <p>
              We create high-performance, responsive websites and custom web
              applications that blend visual appeal with user-friendly design to
              drive business growth.
            </p>
          </div>
          <div class="os3_con2">
            <h3>
              We specialize in building high-performance, responsive websites
              that are visually appealing and user-friendly. From corporate
              websites to custom web applications, we deliver solutions that
              drive business success.
            </h3>
          </div>
        </div>
        <div class="os3_con_a">
          <div class="os3_con1">
            <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
            <h2>Mobile Application Development</h2>
            <p>
              We develop user-friendly, high-performance mobile apps for iOS and
              Android, offering both native and hybrid solutions that ensure
              excellent user experiences.
            </p>
          </div>
          <div class="os3_con2">
            <h3>
              Our mobile app development services focus on creating
              user-friendly, high-performance apps for iOS and Android
              platforms. Whether it’s a native app or a hybrid solution, we
              provide apps that deliver great user experiences.
            </h3>
          </div>
        </div>
        <div class="os3_con">
          <div class="os3_con1">
            <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
            <h2>Custom Software Solutions</h2>
            <p>
              We deliver customized software solutions that address your
              business's specific challenges, developing everything from
              enterprise software to cloud-based systems to enhance your
              operations.
            </p>
          </div>
          <div class="os3_con2">
            <h3>
              We offer tailored software solutions that address the specific
              challenges your business faces. From enterprise software to
              cloud-based systems, we build software that enhances your
              operations.
            </h3>
          </div>
        </div>
        <div class="os3_con_a">
          <div class="os3_con1">
            <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
            <h2>Intuitive UI/UX Design</h2>
            <p>
              We create intuitive and visually appealing UI/UX designs through
              thorough research, wireframing, and prototyping to align with user
              needs and business goals.
            </p>
          </div>
          <div class="os3_con2">
            <h3>
              Our UI/UX design services focus on creating intuitive and visually
              appealing interfaces. We conduct thorough user research,
              wireframing, and prototyping to ensure that the final product
              meets user needs and business goals.
            </h3>
          </div>
        </div>
        <div class="os3_con">
          <div class="os3_con1">
            <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
            <h2>SEO and Digital Marketing</h2>
            <p>
              We provide full-service SEO and digital marketing to boost your
              online visibility, drive traffic, and increase conversions.
            </p>
          </div>
          <div class="os3_con2">
            <h3>
              We provide comprehensive SEO and digital marketing services to
              increase your online visibility. From keyword research to social
              media management, we help drive traffic and increase conversions.
            </h3>
          </div>
        </div>
        <div class="os3_con_a">
          <div class="os3_con1">
            <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
            <h2>E-Commerce Solutions</h2>
            <p>
              We develop e-commerce platforms that ensure seamless shopping
              experiences, integrating secure payment gateways and inventory
              management to boost online sales.
            </p>
          </div>
          <div class="os3_con2">
            <h3>
              We build e-commerce platforms that provide seamless shopping
              experiences for customers. From secure payment gateways to
              inventory management systems, we deliver solutions that enhance
              online sales.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section1 {
  padding: 1%;
  margin-top: -8%;
}
.os1 {
  width: 100%;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.os1_con {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
.os1_con h1 {
  font-size: 5vw;
  font-weight: 700;
}
.os1_con p {
  font-size: 3.2vw;
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
.head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.head h5 {
  font-size: 1.2rem;
  font-weight: 500;
  color: grey;
}
.head h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0;
}
.head p {
  font-size: 1.2rem;
  font-weight: 500;
  color: grey;
  margin: 0.2rem 0 2rem 0;
  padding: 0% 2%;
}
.container3 {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
}
.sec3a {
  width: 30%;
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2%;
}
span {
  font-size: 2rem;
  color: white;
  margin: 1rem 0;
  padding: 1.2rem;
  background-color: #f96227;
  border-radius: 50%;
}
.sec3a h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}
.sec3a p {
  font-size: 1.2rem;
  font-weight: 500;
  color: grey;
  margin: 1rem 0;
}
.os3_con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 10%;
  margin: 5% 0;
}
.os3_con1,
.os3_con2 {
  width: 50%;
  padding: 2%;
}
.os3_con2 {
  /* background-color: #1d2a34; */
  background: linear-gradient(90deg, #1d2a34 40%, #133856 100%);
  border-radius: 10px;
  padding: 5% 5%;
}
/* .os3_con2 ul {
  list-style: none;
  padding: 1rem;
}
.os3_con2 li {
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
} */
.os3_con2 h3 {
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  line-height: 1.5;
}
.os3_con1 h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0;
}
.os3_con1 p {
  font-size: 1.2rem;
  font-weight: 500;
  color: grey;
  margin: 1rem 0;
}
.os3_con_a {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 5% 10%;
  margin: 2% 0;
}
.tick {
  display: inline-block;
  color: #1d2a34;
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  padding: 0.8rem;
  background-color: white;
}
.tick_a {
  display: inline-block;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  padding: 0.8rem;
  background-color: #f96227;
}
@media screen and (max-width: 1200px) {
  .sec3a {
    width: 100%;
  }
  .container3 {
    flex-direction: column;
    gap: 2rem;
  }
  .os3_con {
    flex-direction: column;
    gap: 2rem;
    padding: 3% 1%;
  }
  .os3_con_a {
    flex-direction: column;
    gap: 2rem;
    padding: 3% 1%;
  }
  .os3_con1,
  .os3_con2 {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .os1_con h1 {
    font-size: 1.8rem;
  }
  .os1_con p {
    font-size: 0.9rem;
  }
  .head h1 {
    font-size: 2.1rem;
  }
}
</style>
