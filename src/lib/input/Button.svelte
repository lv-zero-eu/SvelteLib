<script lang="ts">
	export let disabled = false;
	export let onClick = () => {};

</script>

<button {disabled} on:click={onClick}>
	<slot />
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		border-radius: 0.25rem;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		background-color: var(--active);
		border: 1px solid var(--active);
		color: var(--bg);
		width: fit-content;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button:hover:not(:disabled),
	button:focus,
	button:active {
		background-color: var(--bg-accent);
		border-color: var(--border);
		color: var(--txt);
	}
</style>
