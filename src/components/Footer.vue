<template>
    <footer>
        <div class="footer_con">
            <img src="/image/Logo-01.png" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore dolorum a quos eveniet blanditiis!</p>
        </div>
        <div class="footer_con">
            <h3>Quick Links</h3>
            <ul>
                <li><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span> Home</li>
                <li><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>About</li>
                <li><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>Services</li>
                <li><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>Portfolio</li>
                <li><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>Projects</li>
            </ul>
        </div>
        <div class="footer_con">
            <h3>Contact Us</h3>
            <ul>
                <li><span class="icon"><font-awesome-icon :icon="['fas', 'phone-volume']" /></span> 9845xxxxxx</li>
                <li><span class="icon"><font-awesome-icon :icon="['fas', 'envelope']" /></span> contact@mitoms.com</li>
                <li><span class="icon"><font-awesome-icon :icon="['fas', 'map-location']" /></span>Delhi</li>
            </ul>

        </div>
    </footer>
</template>

<style scoped>
    footer {
        display: flex;
        color: white;
        background-color: #1D2A34;
        padding: 2% 5% 5% 10%; 
    }
    .footer_con img {
        width: 50%;
        margin-bottom: 4%;
    }
    .footer_con {
        width: 30.33%;
        padding: 2%;
    }
    .footer_con h3{
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin: 0 2% 5% 10%;
        text-decoration: underline;
    }
    .footer_con p{
        font-size: 1rem;
        font-weight: 400;
    }
    .footer_con ul{
        list-style: none;
    }
    .footer_con ul li{
        font-size: 1rem;
        font-weight: 400;
        margin: 2% 2% 2% 10%;
    }
    .footer_con ul li:hover{
        color: #FFC107;
        cursor: pointer;
        font-weight: bold;
    }
    .icon{
        margin-right: 2%;
        font-size: 1.2rem;
    }
    .footer_con span {
        margin-right: 2%;
    }
    @media screen and (max-width: 700px){
        footer{
            flex-direction: column;
        }
        .footer_con{
            width: 100%;
        }
        
    }
</style>