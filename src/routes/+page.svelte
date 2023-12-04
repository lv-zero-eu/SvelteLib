<script>
	// @ts-expect-error idk
	import { TextBox, RadioButton, ToggleSwitch } from '$lib/';
	import Box from '$lib/box/Box.svelte';
	let checked = false;

	let value = '';

	const onClick = () => {
		value = value ? '' : 'qsd';
	};
</script>

<Box>
	<div class="header" slot="header">Input</div>
	<div class="grid">
		<ToggleSwitch bind:checked size="sm">{checked}</ToggleSwitch>
		<ToggleSwitch bind:checked size="md">{checked}</ToggleSwitch>
		<ToggleSwitch bind:checked size="lg" disabled>{checked}</ToggleSwitch>
		<ToggleSwitch bind:checked size="xl">{checked}</ToggleSwitch>
	</div>

	<div class="grid">
		<RadioButton group="test" size="sm" checked>1</RadioButton>
		<RadioButton group="test" size="md">2</RadioButton>
		<RadioButton group="test" size="lg" disabled>3</RadioButton>
		<RadioButton group="test" size="xl">4</RadioButton>
	</div>

	<div class="grid">
		<TextBox type="password" size="sm" bind:value />
		<TextBox type="search" size="md" bind:value {onClick}></TextBox>
		<TextBox type="search" size="lg" disabled bind:value />
		<TextBox size="xl" bind:value>{checked}</TextBox>
	</div>
</Box>

<style>
	.grid {
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem 0;
		width: 30rem;
	}
	:global(label) {
		text-transform: capitalize;
	}
	.header {
		padding: 0.3rem 0;
		display: flex;
	}
</style>
