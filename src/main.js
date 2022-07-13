
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AboutComponent from '@/components/AboutComponent.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import ListComponent from '@/components/Movies/ListComponent'
import SaveComponent from '@/components/Movies/SaveComponent'
import DetalleComponent from '@/components/DetalleComponent.vue'
import CardComponent from '@/components/Movies/CardComponent.vue'

import EditComponent from '@/components/EditComponent.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import VueAxios from 'vue-axios'
import axios from 'axios'

//import store from './store'

//Definimos una ruta por defecto para axios y asi evitar tipear la ruta de la api en cada peticion:

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/'
})


//createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)

app.use(VueAxios, axios)
app.config.globalProperties.$axios = { ...axiosInstance }


app.use(router)
app.component('AboutComponent', AboutComponent)
app.component('EditComponent', EditComponent)
app.component('HelloWorld', HelloWorld);
app.component('ProfileComponent', ProfileComponent);
app.component('LoginComponent', LoginComponent);
app.component('ListComponent', ListComponent)
app.component('SaveComponent', SaveComponent)
app.component('DetalleComponent', DetalleComponent)
app.component('CardComponent', CardComponent)


app.mount('#app')
//use(store)

import 'bootstrap/dist/js/bootstrap.js'