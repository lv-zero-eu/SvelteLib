<div>
	<slot />
</div>

<style>
	:root {
		--bg: rgb(13, 13, 13);
		--bg-accent: rgba(33, 37, 43, 0.6);
		--border: rgb(100, 100, 100);
		--border-radius: 0.3rem;
		--txt: white;

		--active: white;

		--disable-radiant-1: rgba(255, 255, 255, 0);
		--disable-radiant-2: rgba(255, 255, 255, 0.2);

		--color-accent-emphasis: #1f6feb;
		--color-accent-fg: #58a6ff;
		--color-accent-muted: rgba(56, 139, 253, 0.4);
		--color-accent-subtle: rgba(56, 139, 253, 0.1);
		--color-action-list-item-danger-active-bg: --txt-secondary: rgba(255, 255, 255, 0.78);

		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	@media (prefers-color-scheme: light) {
		:root {
			--bg: white;
			--bg-accent: rgba(100, 100, 100, 0.1);
			--border: rgba(100, 100, 100, 1);
			--txt: black;

			--active: #1f6feb;

			--disable-radiant-1: rgba(0, 0, 0, 0);
			--disable-radiant-2: rgba(0, 0, 0, 0.1);

			--color-accent-emphasis: #1f6feb;
			--color-accent-fg: #58a6ff;
			--color-accent-muted: rgba(56, 139, 253, 0.4);
			--color-accent-subtle: rgba(56, 139, 253, 0.1);
			--color-action-list-item-danger-active-bg: --txt-secondary: rgba(255, 255, 255, 0.78);
		}
	}
</style>
