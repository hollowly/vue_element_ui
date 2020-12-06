<template>
  <div id="app">
		<btn>layoutANDcontainer</btn>
		<btn>formLogin</btn>
		<!-- <button><router-link to='/layoutANDcontainer'>layoutANDcontainer</router-link></button> <br> -->
		<button><router-link to='/formLogin'>formLogin</router-link></button> <br>
		<button><router-link to='/formOrder'>formOrder</router-link></button> <br>
		<button><router-link to='/iconANDbutton'>iconANDbutton</router-link></button> <br>
		<button><router-link to='/form'>form</router-link></button> <br>
		<button><router-link to='/table'>table</router-link></button> <br>
		<button><router-link to='/notice'>notice</router-link></button> <br>
		<button><router-link to='/navigation'>navigation</router-link></button> <br>
		<button><router-link to='/others'>others</router-link></button> <br>
	<hr>



    <router-view/>

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
