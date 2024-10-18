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
  <section class="section2">
  <div class="sec3 " >
    <div class="head">
    <h5>Laoreet aenean aliquam est</h5>
    <h1>Eros id fames ultricies</h1>
    <p>purus magna metus molestie risus congue nam, mus sapien mattis quam iaculis ullamcorper curabitur</p>
    </div>
    <div class="container3">
        <div class="sec3a">
            <span><font-awesome-icon :icon="['fas', 'pen-nib']" /></span>
            <h2>Ultrices conubia</h2>
            <p>Leo suspendisse quisque nisi gravida dignissim libero urna velit ligula sed, mus consequat natoque cursus congue nunc</p>
        </div>
        <div class="sec3a">
          <span><font-awesome-icon :icon="['fas', 'microchip']" /></span>
            <h2>Ultrices conubia</h2>
            <p>Leo suspendisse quisque nisi gravida dignissim libero urna velit ligula sed, mus consequat natoque cursus congue nunc</p>
        </div>
        <div class="sec3a">
          <span><font-awesome-icon :icon="['fas', 'people-group']" /></span>
            <h2>Ultrices conubia</h2>
            <p>Leo suspendisse quisque nisi gravida dignissim libero urna velit ligula sed, mus consequat natoque cursus congue nunc</p>
        </div>
    </div>
  </div>
</section>
<section class="section2">
  <div class="sec4">
    <div class="head">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Curabitur consequat nam sed mauris iaculis ridiculus fames placerat interdum dignissim lobortis quisque</p>
    </div>
    <div class="container_sec4">
      <div class="sec4_con">
        <div class="sec4_con1">
          <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
          <h2>Eget commodo hac</h2>
          <p>Nisi potenti facilisis integer vehicula faucibus blandit risus ad, per vulputate lacus</p>
        </div>
        <div class="sec4_con2">
          <ul>
            <li>Non sociis lobortis orci</li>
            <li>Auctor posuere mattis egestas</li>
            <li>Non sociis lobortis orci</li>
            <li>Auctor posuere mattis egestas</li>
          </ul>
        </div>
      </div>
      <div class="sec4_con_a">
        <div class="sec4_con1">
          <span><font-awesome-icon :icon="['fas', 'feather']" /></span>
          <h2>Eget commodo hac</h2>
          <p>Nisi potenti facilisis integer vehicula faucibus blandit risus ad, per vulputate lacus</p>
        </div>
        <div class="sec4_con2">
          <ul>
            <li>Non sociis lobortis orci</li>
            <li>Auctor posuere mattis egestas</li>
            <li>Non sociis lobortis orci</li>
            <li>Auctor posuere mattis egestas</li>
          </ul>
        </div>
      </div>
      <div class="sec4_con"></div>
    </div>
  </div>
</section>
</template>

<style scoped>
.section1 {
  padding: 1%;
  margin-top: -8%;
}
.sec1 {
  width: 100%;
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
.head{
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.head h5{
    font-size: 1.2rem;
    font-weight: 500;
    color: grey;
}
.head h1{
    font-size: 3rem;
    font-weight: 900;
    margin: 2rem 0;
}
.head p{
    font-size: 1.2rem;
    font-weight: 500;
    color: grey;
    margin: 1rem 0;
}
.container3{
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
}
.sec3a{
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
span{
    font-size: 2rem;
    color: white;
    margin: 1rem 0;
    padding: 1.2rem;
    background-color:#F96227;
    border-radius: 50%;
}
.sec3a h2{
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem 0;
}
.sec3a p{
    font-size: 1.2rem;
    font-weight: 500;
    color: grey;
    margin: 1rem 0;
}
.sec4_con{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10%;
}
.sec4_con1, .sec4_con2{
    width: 50%;
    padding: 2%;
}
.sec4_con2{
    background-color:#1D2A34;
    border-radius: 10px;
    padding: 5% 2%;
}
.sec4_con2 ul{
    list-style: none;
    padding: 1rem;
}
.sec4_con2 li{
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    margin: 1.5rem 0;
}
.sec4_con1 h2{
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
}
.sec4_con1 p{
    font-size: 1.2rem;
    font-weight: 500;
    color: grey;
    margin: 1rem 0;
}
.sec4_con_a{
  display: flex;
  flex-direction: row-reverse;
}
</style>