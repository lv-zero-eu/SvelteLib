<div class="box">
	<div class="header">
		<slot name="header" />
	</div>
	<div>
		<slot />
	</div>
	<div class="footer">
		<slot name="footer" />
	</div>
</div>

<style>
	.box > *:has(> *) {
		padding: 0.2rem 0.5rem 0.4rem 0.75rem;
	}
	.box {
		border: 1px solid var(--border);
		border-radius: var(--border-radius);
		background-color: transparent;
		width: fit-content;
	}
	.header:has(> *) {
		border-bottom: 1px solid var(--border);
		background-color: var(--bg-accent);
	}
	.footer:has(> *) {
		border-top: 1px solid var(--border);
		background-color: var(--bg-accent);
	}
</style>
