import { createApp } from 'vue';

import router from './router.js'
import store from './store/index.js'
import App from './App.vue'

import Content from './components/ui/Content.vue'
import BaseButton from './components/ui/BaseButton.vue'
import Badge from './components/ui/Badge.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'
import BaseDialog from './components/ui/BaseDialog.vue'

import './style.css'


const app = createApp(App)

app.use(router)
app.use(store)

app.component('Content', Content)
app.component('base-button', BaseButton)
app.component('badge', Badge)
app.component('spinner', BaseSpinner)
app.component('base-dialogue', BaseDialog)

app.mount('#app');

