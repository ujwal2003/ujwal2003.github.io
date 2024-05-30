<script lang="ts">
    import { navIcons } from '$lib/icons/navIcons';
    import NavLinkedInIco from '$lib/icons/navLinkedInIco.svelte';
    import NavGitHubIco from '$lib/icons/navGitHubIco.svelte';

</script>

<nav class='text-white text-2xl flex justify-center md:justify-between px-8 pt-8 pb-12 fixed bottom-0 left-0 w-full md:static z-50 
            max-sm:bg-gray-900 max-sm:border max-sm:border-slate-800 max-sm:rounded-2xl max-sm:pb-6 max-sm:mb-4'>
    <div class="flex gap-10 max-sm:gap-8">
        {#each Object.entries(navIcons) as [navItem, icon]}
            <div class="flex gap-2 cursor-pointer hover:scale-110">
                {@html icon}
                <span class="hidden md:block">{navItem}</span>
            </div>
        {/each}
    </div>

    <div class="hidden lg:block">
        <div class="flex gap-4 pt-2 cursor-pointer">
            <span class="hover:scale-110">
                <NavLinkedInIco />
            </span>
            <span class="hover:scale-110">
                <NavGitHubIco />
            </span>
        </div>
    </div>
</nav>