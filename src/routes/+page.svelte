<script lang="ts">
    import { navIcons } from '$lib/icons/navIcons';
    import NavLinkedInIco from '$lib/icons/navLinkedInIco.svelte';
    import NavGitHubIco from '$lib/icons/navGitHubIco.svelte';

    import Heading from '$lib/Heading.svelte';
    import HeroConnections from '$lib/HeroConnections.svelte';
</script>

<nav class='text-white text-2xl flex justify-center md:justify-between px-10 pt-8 pb-12 fixed bottom-0 left-0 w-full md:static z-50 
            max-sm:bg-gray-900 max-sm:border max-sm:border-slate-800 max-sm:rounded-2xl max-sm:pb-6 max-sm:mb-4 max-sm:fixed'>

    <div class="flex gap-10 max-sm:gap-8">
        {#each Object.entries(navIcons) as [navItem, icon]}
            <div class="flex gap-2 cursor-pointer md:hover:scale-110 max-sm:active:scale-150">
                {@html icon}
                <span class="hidden md:block">{navItem}</span>
            </div>
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

<!-- <div class="flex justify-center pt-16"> -->
    <!-- max-w-screen-md -->
    <!-- <div class="flex flex-col items-center"> -->
        <div class="flex flex-col ml-64 pt-16">
            <Heading />
            <HeroConnections />
    
            <!-- <div class="w-2/3"> -->
                <h1 class="text-white font-semibold text-5xl mt-24 mr-auto">
                    About Me
                </h1>
                <p class="text-white text-wrap text-2xl pr-36 mx-auto mt-6 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            <!-- </div> -->
        </div>

    <!-- </div> -->
<!-- </div> -->