<script lang="ts">
    export let fontSize: string = "32px";
</script>

<h2 class={`text-white font-medium text-5xl max-sm:text-[${fontSize}] w-60 max-sm:w-32`}>
    <slot></slot>
</h2>