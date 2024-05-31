<script lang="ts">
    import NavBar from '$lib/NavBar.svelte';
    import Heading from '$lib/HeroSection/Heading.svelte';
    import HeroConnections from '$lib/HeroSection/HeroConnections.svelte';
    import AboutMe from '$lib/MainPage/AboutMe.svelte';
    import Experience from '$lib/MainPage/Experience.svelte';
    import Projects from '$lib/MainPage/Projects.svelte';
    import ContactMe from '$lib/MainPage/ContactMe.svelte';
</script>

<div id="Top"></div>
<NavBar />

<div class="flex flex-col ml-64 pt-16 max-sm:ml-8 pb-14 mt-12 max-sm:mt-0">
    <Heading />
    <HeroConnections />

    <AboutMe />
    <Experience />
    <Projects />
    <ContactMe />
</div>