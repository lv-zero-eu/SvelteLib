<script lang="ts">
	import type { SizeMapping } from './type.d.ts';

	export let checked = false;
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let disabled = false;

	let sizeMapping: SizeMapping = {
		sm: '0.9rem',
		md: '1.1rem',
		lg: '1.3rem',
		xl: '1.5rem'
	};
</script>

<label style="--switch-size:{sizeMapping[size]}" class:disabled>
	<input type="checkbox" bind:checked {disabled} />
	<span class="switch">
		<span class="circle" />
	</span>
	<slot />
</label>

<style>
	label {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
		display: flex;
		align-items: center;
		font-weight: bold;
		gap: 5px;
	}
	label.disabled {
		filter: brightness(0.5);
		cursor: not-allowed;
	}
	.switch {
		display: inline-block;
		height: var(--switch-size);
		aspect-ratio: 4/2;
		background-color: transparent;
		border-radius: var(--switch-size);
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

	input:disabled + .switch {
		cursor: not-allowed;
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
