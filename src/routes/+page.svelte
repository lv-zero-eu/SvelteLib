<script>
	import ToggleSwitch from '$lib/input/ToggleSwitch.svelte';
  let checked;
</script>

<div>
	<ToggleSwitch bind:checked size="sm" />
  <ToggleSwitch bind:checked size="md" />
  <ToggleSwitch bind:checked size="lg" />
  <ToggleSwitch bind:checked size="xl" />
</div>

<style>
	div {
		height: 20px;
		width: 20px;
	}
</style>
