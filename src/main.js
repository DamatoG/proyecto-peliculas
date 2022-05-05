
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AboutComponent from '@/components/AboutComponent.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import ListComponent from '@/components/Movies/ListComponent'
import SaveComponent from '@/components/Movies/SaveComponent'


import axios from 'axios'
//import store from './store'

//Definimos una ruta por defecto para axios y asi evitar tipear la ruta de la api en cada peticion:
axios.defaults.baseURL = 'http://127.0.0.1:5000/'


//createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
app.use(router)

app.component('AboutComponent', AboutComponent)
app.component('HelloWorld', HelloWorld);
app.component('ProfileComponent', ProfileComponent);
app.component('LoginComponent', LoginComponent);
app.component('ListComponent', ListComponent)
app.component('SaveComponent', SaveComponent)


app.mount('#app')
//use(store)