import Vue from 'vue'
import VueRouter from 'vue-router'


import layoutANDcontainer from '../components/layoutANDcontainer'
Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		// redirect:'/'
	},
	{
		path:'/layoutANDcontainer',
		component:layoutANDcontainer
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
