import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
import Index from '../components/index.vue';
import Animation from '../components/animation.vue';
import PRODUCT from '../components/product.vue';
import Detail from '../components/detail.vue';


export default new Router({
  routes: [
    { path: '/',
      name: 'index',
      component: Index
    },
    { path: '/animation',
      name: 'animation',
      component: Animation
    },
    { path: '/product',
      name: 'product',
      component: PRODUCT
    },
    { path: '/**/:bid',
      name: 'detail',
      component: Detail
    }
  ]
})
