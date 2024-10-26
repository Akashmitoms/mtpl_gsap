<template>
    <header>
       <div class="nav1">
        <img src="/image/Logo-01001.png" alt="">
        <h2>MiToms</h2>
       </div>
       <div class="nav2">
              <ul>
                <router-link to="/"><li>HOME </li></router-link>
                <router-link to="/aboutUs"><li>ABOUT US </li></router-link>
                <router-link to="/ourServices"><li>SERVICES </li></router-link>
                <router-link to="/portfolio"><li>SOLUTIONS </li></router-link>
                <li>CASE STUDIES</li>
                <li>BLOG</li>
                
              </ul>
       </div>
       <div class="nav3">
        <h3>CONTACT</h3>
       </div>
    </header>
</template>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
header{
    /* background-color: #1D2A34; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5%;
    position: sticky;
    top: 0;
    color: white;
    z-index: 2;
}
.nav1{
    display: flex;
    gap: 0.5rem;
}
.nav1 h2{
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 5px;
}
.nav1 img{
    width: 23%;
    border-radius: 50%;
    padding: 5px;
    background-color: white;
    border: 5px solid white;
   
}
.nav2 ul{
    display: flex;
    gap: 2rem;
    list-style: none;
    opacity: 0.9;
}
.nav2 ul li{
    font-size: 1.2rem;
    font-weight: 700;
    padding: 10px 5px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
}
.nav3{
    color: black;
    background-color: white;
    padding: 1% 2%;
    border-radius: 20rem;
}

</style>