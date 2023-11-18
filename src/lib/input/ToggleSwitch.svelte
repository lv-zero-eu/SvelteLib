<script lang="ts">
	export let checked;
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

	let sizeMapping: { [key: size]: string } = {
		sm: '1rem',
		md: '1.5rem',
		lg: '2rem',
		xl: '2.5rem'
	};
</script>

<label style="--switch-width:{sizeMapping[size]}">
	<input type="checkbox" bind:checked />
	<span class="switch">
		<span class="circle" />
	</span>
</label>

<style>
	label {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}
	.switch {
		display: inline-block;
		height: var(--switch-width);
		aspect-ratio: 4/2;
		background-color: transparent;
		border-radius: var(--switch-width);
		position: relative;
		cursor: pointer;
		border: 1px solid var(--border);
		transition: background-color 0.3s ease;
	}

	.circle {
		position: absolute;
		top: 3px;
		left: 3px;
		height: calc(100% - 6px);
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--border);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox']:checked + .switch {
		background-color: white;
		border: 1px solid var(--bg);
	}

	input[type='checkbox']:checked + .switch .circle {
		transform: translateX(calc(6px + 100%));
		background-color: var(--bg);
	}
</style>
