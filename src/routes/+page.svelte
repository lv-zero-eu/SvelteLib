<script>
	import ToggleSwitch from '$lib/input/ToggleSwitch.svelte';
	import RadioButton from '$lib/input/RadioButton.svelte';
	import TextBox from '$lib/input/TextBox.svelte';
	let checked = false;

	let value = '';

	const onClick = () => {
		value = value ? '' : 'qsd';
	};
</script>

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

<style>
	.grid {
		display: grid;
		gap: 0.5rem;
		margin-right: 1rem;
		justify-items: end;
		width: 20vw;
	}
	:global(label) {
		text-transform: capitalize;
	}
</style>
