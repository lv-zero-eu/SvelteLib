<main>
	<slot />
</main>

<style>
	:root {
		--bg: rgb(13, 13, 13);
		--border: rgb(100, 100, 100);
		--txt: white;

		--txt-secondary: rgba(255, 255, 255, 0.78);
		--txt-accent: rgb(153, 255, 153);
		--txt-accent2: rgba(153, 255, 153, 0.2);
	}

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
	main{
		display: flex;
		margin: 1rem;
	}
</style>
