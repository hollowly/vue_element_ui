import Vue from 'vue'
import VueRouter from 'vue-router'

const layoutANDcontainer = () => import('../components/layoutANDcontainer')
const login = () => import('../components/login')
// import


Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		// redirect:'/'
	},
	{
		path:'/layoutANDcontainer',
		component:layoutANDcontainer
	},
	{
		path:'/login',
		component:login
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
