<script lang="ts">
    import { navIcons } from '$lib/icons/navIcons';
    import NavLinkedInIco from '$lib/icons/navLinkedInIco.svelte';
    import NavGitHubIco from '$lib/icons/navGitHubIco.svelte';

</script>

<nav class='text-white text-2xl flex justify-center md:justify-between px-8 pt-8 pb-12 fixed bottom-0 left-0 w-full md:static z-50 bg-gray-900'>
    <div class="flex gap-10 md:gap-8">
        {#each Object.entries(navIcons) as [navItem, icon]}
            <div class="flex gap-2">
                {@html icon}
                <span class="hidden md:block">{navItem}</span>
            </div>
        {/each}
    </div>

    <div class="hidden md:block">
        <div class="flex gap-4 pt-1">
            <NavLinkedInIco />
            <NavGitHubIco />
        </div>
    </div>
</nav>