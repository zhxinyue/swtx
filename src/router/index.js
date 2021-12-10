import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Question1 from '../views/Question1.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import Thanks from '../views/Thanks.vue'
import store from '../vuex/store';
Vue.use(Router)
let router = new Router({
  routes:[
    {
      path: '/',
      name: 'Index',
      component: Index

    },
    {
      path: '/question1',
      name: 'Question1',
      component: Question1
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    
  
  })

  router.beforeEach((to, from, next) => {
    // 对组件B进行动态缓存
    if (to.name === 'Question1' 
     || to.name === 'PersonalInfo') {
      store.commit('iskeepAlive', to.name);
    }
    next();
  })
export default router;
