<script>
	// @ts-expect-error idk
	import { ThemeWrapper } from '$lib/';
</script>

<ThemeWrapper>
	<slot />
</ThemeWrapper>

<style>
	:global(body) {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		min-width: 320px;
		width: 100vw;
		min-height: 100vh;
		background-color: var(--bg);
		color: var(--txt);
	}
</style>
