<script>

	import Seo from '$lib/Seo.svelte';
    import What from '../component/What.svelte';

	export let data;

	const { posts } = data;
</script>


<What />

<div class="container">
	<div class="grid">
		{#each posts as { id, title, image, body }}
			<div>
				<h2>{title.substring(0, 20)}</h2>
				<img src={image} alt={title} />
				<p>{body}</p>
			</div>
		{/each}
	</div>
</div>

<Seo title="sample" description="sample" type="WebSite"/>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	}
	img {
		height: 250px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>




