import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCart from './pages/ShoppingCart.vue';
import ProductDetail from './pages/ProductDetail.vue';
import ProductsPage from './pages/ProductsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: ShoppingCart,
    },{
        path: '/products',
        component: ProductsPage,
    },{
        path: '/products/:productId',
        component: ProductDetail
    },{
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }]
}))
.mount('#app')
