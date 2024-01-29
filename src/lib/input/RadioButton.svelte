<script lang="ts">
	import type { SizeMapping, SizeAvailable } from './type.d.ts';

	export let size: SizeAvailable = 'md';
	export let value = '';
	export let group = '';
	export let checked = false;
	export let disabled = false;

	let sizeMapping: SizeMapping = {
		sm: '0.25rem',
		md: '0.35rem',
		lg: '0.45rem',
		xl: '0.55rem'
	};
</script>

<label style="--radio-size:{sizeMapping[size]}" class:disabled>
	<input type="radio" bind:value name={group} {checked} {disabled} />
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
		border: max(calc(var(--radio-size) * 0.75), 1px) solid var(--border);
		background-color: var(--bg);
		margin-right: 5px;
	}

	label.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	label:not(.disabled):hover span {
		border-color: var(--active);
	}

	label input:checked + span {
		border-color: var(--active);
	}
</style>
