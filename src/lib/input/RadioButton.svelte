<script lang="ts">
	import type { SizeMapping } from './type.d.ts';

	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let value = '';
	export let group = '';
	export let checked = false;

	let sizeMapping: SizeMapping = {
		sm: '0.2rem',
		md: '0.4rem',
		lg: '0.6rem',
		xl: '0.8rem'
	};
</script>

<label style="--radio-size:{sizeMapping[size]}">
	<input type="radio" bind:value name={group} {checked} />
	<span />
	<slot />
</label>

<style>
	input {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	}
	span {
		display: inline-block;
		width: var(--radio-size);
		aspect-ratio: 1/1;
		border-radius: 50%;
		border: max(calc(var(--radio-size) / 3), 3px) solid var(--border);
		background-color: var(--bg);
		margin-right: 6px;
	}

	label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	label:hover span {
		background-color: white;
	}

	label input:checked + span {
		background-color: white;
	}
</style>
