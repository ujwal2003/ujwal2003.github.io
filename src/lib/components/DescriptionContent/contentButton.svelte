<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let arrowIcon = false;
    const dispatch = createEventDispatcher();

    export let smallText = false;
    export let noTopMargin = false;

    let textSize: 'text-lg' | 'text-md' = (smallText) ? 'text-md' : 'text-lg';
    let mt = (noTopMargin) ? '' : 'mt-3';

    let styles = `py-1 px-2 inline-flex items-center gap-x-2 ${textSize} rounded-lg 
                    border border-[#7F94A6] text-[#7F94A6] disabled:opacity-50 
                    disabled:pointer-events-none hover:bg-slate-300/20`;
</script>

<div class={mt}>
    <button type="button" class={styles} on:click={() => dispatch('contentClick')}>
        <slot></slot> 

        {#if arrowIcon}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46671 21L5.83337 19.3667L17.0334 8.16666H7.00004V5.83333H21V19.8333H18.6667V9.79999L7.46671 21Z" fill="#7F94A6"/>
            </svg>
        {/if}
    </button>
</div>