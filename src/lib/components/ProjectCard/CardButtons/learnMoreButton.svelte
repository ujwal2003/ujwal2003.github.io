<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let disabled = false;
</script>

{#if disabled}
    <button class="py-1.5 px-8 inline-flex items-center gap-x-2 text-md rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 
                   disabled:opacity-50 disabled:cursor-no-drop disabled:hover:bg-blue-600 md:mb-2 max-sm:py-1" disabled type="button">
        Learn More
    </button>
{:else}
    <button class="py-1.5 px-8 inline-flex items-center gap-x-2 text-md rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 
                   disabled:opacity-50 disabled:cursor-no-drop disabled:hover:bg-blue-600 md:mb-2 max-sm:py-1" type="button" on:click={() => dispatch('learnMoreClick')}>
    Learn More
    </button>
{/if}