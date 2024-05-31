<script lang="ts">
    import { navIcons } from '$lib/icons/navIcons';
    import NavLinkedInIco from '$lib/icons/navLinkedInIco.svelte';
    import NavGitHubIco from '$lib/icons/navGitHubIco.svelte';

    import Heading from '$lib/Heading.svelte';
    import HeroConnections from '$lib/HeroConnections.svelte';

    const NavSections: Record<string, string> = {Home: "/", About: "#AboutMe", Experience: "#ExprSection", Projects: "#ProjSection", "Contact": "#ContactMe"};
    const getNavSection = (navItem: string): string => NavSections[navItem];
</script>

<nav class="text-white text-2xl flex justify-center md:justify-between px-10 pt-8 pb-2 fixed bottom-0 left-0 w-full md:static md:top-0 z-50 
            max-sm:bg-gray-900 max-sm:border max-sm:border-slate-800 max-sm:rounded-2xl max-sm:pb-6 max-sm:mb-4 max-sm:fixed
            md:bg-[#0E161B]">

    <div class="flex gap-10 max-sm:gap-8">
        {#each Object.entries(navIcons) as [navItem, icon]}
            <a class="flex gap-2 cursor-pointer md:hover:scale-110 max-sm:active:scale-150" href={getNavSection(navItem)}>
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

<div class="flex flex-col ml-64 pt-16 max-sm:ml-8 pb-14 mt-12">
    <Heading />
    <HeroConnections />

    <h1 class="text-white font-semibold text-5xl mt-24 mr-auto max-sm:text-4xl max-sm:mt-14" id="AboutMe">
        About Me
    </h1>

    <p class="text-white text-wrap text-2xl pr-44 mx-auto mt-6 leading-relaxed 
                max-sm:pr-3 max-sm:text-xl max-sm:mt-4 max-sm:pb-32 max-sm:leading-7">
        Hey there! I'm 
        <span class="bg-sky-500/[.05]">
            Ujwal Joshi,
        </span> 
        a senior at the 
        <a class="hover:bg-none hover:underline hover:decoration-sky-500/[.25] hover:underline-offset-4 hover:decoration-2 hover:decoration-double" 
            href="https://www.uh.edu/" target="_blank">
            <span class="bg-sky-500/[.05]">
                University of Houston,
            </span>
        </a> 
         currently pursuing a B.S. in Computer Science with a minor in Mathematics. I'm passionate about all things tech-related, with a keen interest in software engineering, data science, and web development. I am excited to contribute to and experience more technological innovations in my time and aspire to make a impact in the field.
    </p>
</div>