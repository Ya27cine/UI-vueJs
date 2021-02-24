const Home = {
    template: '<h1>Home</h1>',
    name: 'Home'
}

const UserSetting = {
    template: '<h1>User Setting</h1>',
    name: 'UserSetting'
}


const WishList = {
    template: '<h1>Wish List</h1>',
    name: 'WishList'
}


const ShoppingCart = {
    template: '<h1>Shopping Cart</h1>',
    name: 'ShoppingCart'
}


// rouetr :
const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-setting', component: UserSetting, name: 'UserSetting' },
        { path: '/wish-list', component: WishList, name: 'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' }
    ]
})

const vue = new Vue({
    router
}).$mount('#app');