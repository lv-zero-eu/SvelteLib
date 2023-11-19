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
	<TextBox type="search" size="sm" bind:value {onClick} />
	<TextBox type="search" size="md" disabled bind:value />
	<TextBox type="password" size="lg" bind:value />
	<TextBox size="xl" bind:value disabled/>
</div>

<style>
	.grid {
		display: grid;
		gap: 0.5rem;
		margin-right: 1rem;
		justify-items: end;
    width: 5rem;
	}
	:global(label) {
		text-transform: capitalize;
	}
</style>
