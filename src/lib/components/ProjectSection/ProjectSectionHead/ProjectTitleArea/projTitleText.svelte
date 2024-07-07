<script lang="ts">
    export let mobileFontSize: string = "32px";
    export let defaultFontSize: string = "3rem";
</script>

<h2 class={`text-white font-medium text-[${defaultFontSize}] leading-none max-sm:text-[${mobileFontSize}] w-60 max-sm:w-32`}>
    <slot></slot>
</h2>