<script>
	export let size = 'medium';
	console.log(size);
</script>

<button class:small={size == 'small'} class:medium={size == 'medium'} {...$$restProps}>
	<slot />
</button>

<style>
	button {
		padding: 1em 1.5em;
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		color: white;
		font-size: 1em;
		cursor: pointer;
	}

	.medium {
		padding: 0.5em 1.5em;
	}

	.small {
		padding: 0.25em 0.5em;
	}
</style>
