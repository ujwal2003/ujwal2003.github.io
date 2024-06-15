<script lang="ts">
    import { handleAnchorClick } from "$lib/smoothScroll";

    export let url = "/";
</script>

<div class="inline-flex border rounded-full border-neutral-700">
    <a type="button" class="inline-flex flex-shrink-0 justify-center items-center size-7 rounded-full focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-500 hover:bg-blue-900 hover:text-blue-200" href={url} on:click={handleAnchorClick}>

        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 3.707V12.5a.5.5 0 0 1-1 0V3.707L3.854 6.854a.5.5 0 1 1-.708-.708z" clip-rule="evenodd"/></svg>

    </a>
</div>