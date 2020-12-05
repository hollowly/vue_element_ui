import Vue from 'vue'
import VueRouter from 'vue-router'

const layoutANDcontainer = () => import('../components/layoutANDcontainer')
const formANDcard = () => import('../components/formANDcard')
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
		path:'/formANDcard',
		component:formANDcard
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
