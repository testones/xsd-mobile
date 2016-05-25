'use strict';
//载入模块

var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource')

require('./css/sm.css');     //载入样式模块

Vue.use(VueRouter);         //启用路由模块
Vue.use(VueResource);       //启用AJAX模块

var App = Vue.extend();

var router = new VueRouter();

router.map({
    '/' : {
        component : common,
        subRoutes : {
            '/' : {
                component : index
            },
            '/carsloan': {
                name : 'carsloan',
                component : carsloan
            },
            '/houseloan': {
                name : 'houseloan',
                component : houseloan
            },
            '/houseloan': {
                name : 'creditloan',
                component : creditloan
            },
            '/bankloan': {
                name : 'bankloan',
                component : bankloan
            }
        }
    }
});

router.redirect({
    '*': '/'
})

router.start(App,"#app");
