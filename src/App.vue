<template>
  <div id="app">
		<div style="display:flex">
			<router-link to='/layoutANDcontainer'><btn>layoutANDcontainer</btn></router-link>
			<router-link to='/formLogin'><btn>formLogin</btn></router-link>
			<router-link to='/formOrder'><btn>formOrder</btn></router-link>
			<router-link to='/iconANDbutton'><btn>iconANDbutton</btn></router-link>
			<router-link to='/form'><btn>form</btn></router-link>
			<router-link to='/table'><btn>table</btn></router-link>
			<router-link to='/notice'><btn>notice</btn></router-link>
			<router-link to='/navigation'><btn>navigation</btn></router-link>
			<router-link to='/others'><btn>others</btn></router-link>
		</div>

	<hr>
    <router-view />
  </div>
</template>

<script>
import btn from './components/btn'
export default {
	components: {
		btn
	}
}
</script>

<style>

</style>
