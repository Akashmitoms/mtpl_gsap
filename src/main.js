import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesRight, faBars, faEnvelope, faFeather, faMapLocation, faMicrochip, faPenNib, faPeopleGroup, faPhoneVolume, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faPhoneVolume, faEnvelope, faMapLocation, faAnglesRight, faPenNib, faMicrochip, faPeopleGroup, faFeather)

const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
