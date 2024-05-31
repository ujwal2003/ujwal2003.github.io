<script lang="ts">
    import NavBar from '$lib/NavBar.svelte';
    import Heading from '$lib/HeroSection/Heading.svelte';
    import HeroConnections from '$lib/HeroSection/HeroConnections.svelte';
    import AboutMe from '$lib/AboutMe.svelte';
</script>

<NavBar />

<div class="flex flex-col ml-64 pt-16 max-sm:ml-8 pb-14 mt-12 max-sm:mt-0">
    <Heading />
    <HeroConnections />

    <AboutMe />
</div>