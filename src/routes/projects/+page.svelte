<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import MlTraffic from "$lib/ProjectsPage/MLTraffic.svelte";
    import ChatAIr from "$lib/ProjectsPage/chatAIr.svelte";
    import Cosc3337hw5 from "$lib/ProjectsPage/cosc3337hw5.svelte";
    import FluidDynamics from "$lib/ProjectsPage/fluidDynamics.svelte";
    import HackTx23 from "$lib/ProjectsPage/hackTX23.svelte";
    import Huffman from "$lib/ProjectsPage/huffman.svelte";
    import Minipython from "$lib/ProjectsPage/minipython.svelte";
    import MusicGui from "$lib/ProjectsPage/musicGUI.svelte";
    import CatchUp from "$lib/ProjectsPage/catchUp.svelte";
</script>

<NavBar NavSections={{Home: '/', About: "/#AboutMe", Experience: "/#ExprSection", Projects: "/#ProjSection", Contact: "/#ContactMe"}} smoothScroll={false} />

<div class="flex flex-col ml-44 mt-6 max-sm:ml-0 pb-24 max-sm:pb-36">
    <h1 class="text-white font-semibold text-[64px] max-sm:text-[40px] max-sm:text-center">
        Personal Projects
    </h1>

    <CatchUp />
    <Cosc3337hw5 />
    <ChatAIr />
    <MlTraffic />
    <HackTx23 />
    <Huffman />
    <Minipython />
    <FluidDynamics />
    <MusicGui />

</div>