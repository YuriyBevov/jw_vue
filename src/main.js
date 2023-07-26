import './assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*components*/
import MainButton from './components/MainButton.vue'
import BackButton from './components/BackButton.vue'
import SectionHeaderButton from './components/SectionHeaderButton.vue'

import Badge from './components/Badge.vue'
/*components end*/

const app = createApp(App)

app.use(router)

/*components registration*/
app
    .component('section-header-button', SectionHeaderButton)
    .component('badge', Badge)
    .component('main-button', MainButton)
    .component('back-button', BackButton)

app.mount('#app')
