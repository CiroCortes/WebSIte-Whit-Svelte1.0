<script>
	import "../style.css"
	import Navbar from '../component/Navbar.svelte';
	import Footer from "../component/Footer.svelte";
	import Hero from "../component/Hero.svelte";
</script>

<Navbar />
<Hero/>

<slot />
<Footer/>
