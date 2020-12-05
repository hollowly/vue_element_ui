import Vue from 'vue'
import VueRouter from 'vue-router'

const layoutANDcontainer = () => import('../components/layoutANDcontainer')
const formLogin = () => import('../components/formLogin')
const iconANDbutton = () => import('../components/iconANDbutton')
const form = () =>import('../components/form')
const table = () =>import("../components/table")
const formOrder = () =>import('../components/formOrder')

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
		path:'/formLogin',
		component:formLogin
	},
	{
		path:'/iconANDbutton',
		component:iconANDbutton
	},
	{
		path:'/form',
		component:form
	},
	{
		path:"/table",
		component:table
	},
	{
		path:'/formOrder',
		component:formOrder
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
