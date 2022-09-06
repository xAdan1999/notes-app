//para crear la app
import { createApp } from 'vue'

//para acceder a la store desde cualquier componente
import store from './store'

//importar el componente principal
import App from './App.vue'

//crear la app
const app = createApp(App);

//indicar que haga uso de la store
app.use(store);

//montar el componente principal en un contenedor (div del html)
app.mount('#app');
