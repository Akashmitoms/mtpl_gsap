import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesRight, faAt, faBars, faCheck, faCircleNodes, faCompassDrafting, faEnvelope, faFeather, faGears, faLaptopCode, faLightbulb, faMagnifyingGlassChart, faMapLocation, faMicrochip, faMobileScreen, faPenNib, faPeopleGroup, faPhoneVolume, faUserSecret, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faPhoneVolume, faEnvelope, faMapLocation, faAnglesRight, faPenNib, faMicrochip, faPeopleGroup, faFeather,
    faCheck, faAnglesRight, faLightbulb, faPeopleGroup, faCompassDrafting, faXmark, faLaptopCode, faMobileScreen, faGears, faCircleNodes, faMagnifyingGlassChart,
    faAt
)

const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
