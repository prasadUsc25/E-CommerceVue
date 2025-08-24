import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShoppingCart from './pages/ShoppingCart.vue';
import ProductDetail from './pages/ProductDetail.vue';
import ProductsPage from './pages/ProductsPage.vue';

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
    }]
}))
.mount('#app')
