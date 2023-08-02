import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(routers)

app.mount('#app')
