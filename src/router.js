import Vue from 'vue';
import Router from 'vue-router';
import ToDos from './components/ToDos.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'todos',
            component: ToDos
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})