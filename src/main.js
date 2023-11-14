import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// import VueTyperPlugin from 'vue-typer'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)
// Sisipkan kode Vue.js Anda di sini


loadFonts()

createApp(App)
// .use(VueTyperPlugin)
.use(router)
.use(store)
.use(vuetify) 
// .use(VueResource)
  .mount('#app')
