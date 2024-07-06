<!-- Original Source: https://svelte.dev/repl/dd6754a2ad0547c5b1c1ea37c0293fef?version=4.2.18 -->
<script lang="ts">
	export let tip: string;
    export let applyClass = '';

	let isHovered = false;
	let x: number;
	let y: number;

    type ToolTipMouseEvent = MouseEvent & { currentTarget: EventTarget & HTMLDivElement; };
	
	function mouseOver(event: ToolTipMouseEvent) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseMove(event: ToolTipMouseEvent) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div role="tooltip" class={applyClass}
	on:mouseover={mouseOver}
    on:focus={null}
    on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="tooltip">{tip}</div>
{/if}

<style>
	.tooltip {
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 2px;
		position: absolute;
	}
</style>