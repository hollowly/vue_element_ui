import Vue from 'vue'
import VueRouter from 'vue-router'

const layoutANDcontainer = () => import('../components/layoutANDcontainer')
const formLogin = () => import('../components/formLogin')
const iconANDbutton = () => import('../components/iconANDbutton')
const form = () =>import('../components/form')
const table = () =>import("../components/table")
const formOrder = () =>import('../components/formOrder')
const notice = () => import('../components/notice')
const navigation = () =>import('../components/navigation')
const others = () => import('../components/others')

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
	},
	{
		path:'/notice',
		component:notice
	},
	{
		path:'/navigation',
		component:navigation
	},
	{
		path:"/others",
		component:others
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
