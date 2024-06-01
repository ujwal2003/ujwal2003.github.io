<script lang="ts">
    import { navIcons } from './icons/navIcons';
    import { handleAnchorClick } from './smoothScroll';
    import NavLinkedInIco from './icons/navLinkedInIco.svelte';
    import NavGitHubIco from './icons/navGitHubIco.svelte';

    type Nav = 'Home' | 'About' | 'Experience' | 'Projects' | 'Contact';

    export let NavSections: Record<Nav, string> = {Home: "#Top", About: "#AboutMe", Experience: "#ExprSection", Projects: "#ProjSection", Contact: "#ContactMe"};
    const getNavSection = (navItem: string): string => NavSections[navItem as Nav];
</script>

<nav class="text-white text-2xl flex justify-center md:justify-between px-10 pt-8 pb-2 fixed bottom-0 left-0 w-full md:static md:top-0 z-50 
            max-sm:bg-gray-900 max-sm:border max-sm:border-slate-800 max-sm:rounded-2xl max-sm:pb-6 max-sm:mb-4 max-sm:fixed
            md:bg-[#0E161B]" id="Home">

    <div class="flex gap-10 max-sm:gap-8">
        {#each Object.entries(navIcons) as [navItem, icon]}
            <a class="flex gap-2 cursor-pointer md:hover:scale-110 max-sm:active:scale-150" href={getNavSection(navItem)} on:click={handleAnchorClick}>
                {@html icon}
                <span class="hidden md:block">{navItem}</span>
            </a>
        {/each}
    </div>

    <div class="hidden lg:block">
        <div class="flex gap-4 cursor-pointer">
            <a class="hover:scale-110" href="https://www.linkedin.com/in/ujwalujoshi/" target="_blank">
                <NavLinkedInIco />
            </a>
            <a class="hover:scale-110" href="https://github.com/ujwal2003" target="_blank">
                <NavGitHubIco />
            </a>
        </div>
    </div>
</nav>