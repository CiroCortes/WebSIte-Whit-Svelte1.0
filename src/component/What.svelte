<script>
	import Button from "../lib/Button.svelte";

</script>
<div class="container grid">
	<div class="what">
		<h3>What We Do?</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum sunt natus asperiores, sit
			placeat saepe minima amet quisquam laboriosam.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum sunt natus asperiores, sit
			placeat saepe minima amet quisquam laboriosam.
		</p>
		<Button class="secondary" id="a-button" size="medium">Call to action</Button>
	</div>



	

	<div class="contact">
		<h3>Contact Us</h3>
		<p><strong>Start Boostrap</strong></p>
		<p>3481 melrose place</p>
		<p>santiago de chile</p>
		<p>P: +56 972884713</p>
		<p>E: <a href="mailtoexample@example.com">name@w</a></p>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2em;
	}
	.what {
		grid-column: span 8;
	}
	.contact {
		grid-column: span 4;
	}
	h3 {
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		font-size: 2em;
		font-weight: 500;
		border-bottom: 1px solid #ddd;
	}
	a{
		text-decoration: none;
		color: var(--primary-color);
	}
	a:hover{
		text-decoration: underline;
	}
</style>
