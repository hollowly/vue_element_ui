import Vue from 'vue'
import VueRouter from 'vue-router'

const layoutANDcontainer = () => import('../components/layoutANDcontainer')
const formANDcard = () => import('../components/formANDcard')
const iconANDbutton = () => import('../components/iconANDbutton')
const form = () =>import('../components/form')
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
	},
	{
		path:'/iconANDbutton',
		component:iconANDbutton
	},
	{
		path:'/form',
		component:form
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
