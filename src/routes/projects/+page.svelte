<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import ContentButton from "$lib/components/DescriptionContent/contentButton.svelte";
    import LearnMoreButton from "$lib/components/ProjectCard/CardButtons/learnMoreButton.svelte";
</script>

<NavBar NavSections={{Home: '/', About: "/#AboutMe", Experience: "/#ExprSection", Projects: "/#ProjSection", Contact: "/#ContactMe"}} smoothScroll={false} />

<div class="flex flex-col ml-44 mt-6">
    <h1 class="text-white font-semibold text-[64px]">
        Personal Projects
    </h1>

    <!-- project section -->
    <section class="w-5/6 mt-2">
        <hr class="border-gray-500">
        <div class="mt-5 flex gap-24">
            <div class="flex flex-col gap-4">
                <h2 class="text-white font-medium text-5xl">
                    Chat AIr
                </h2>

                <h3 class="text-[#768087] text-xl pl-2">
                    February 2024
                </h3>
                
                <div class="flex flex-col gap-2 pl-2">
                    <h4 class="text-[#768087] text-xl">
                        Technologies:
                    </h4>

                    <div class="flex gap-1 max-sm:hidden">
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/></code>
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma"/></code>
                    </div>
    
                    <p class="text-[#7F94A6] text-sm w-64">
                        React Native, ExpressJS, RapidAPI, Amadeus, CompromiseJS
                    </p>
                </div>
            </div>

            <div>
                <p class="text-[#7F94A6] text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div class="flex gap-4 mt-6">
                    <LearnMoreButton disabled />
                    <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/CodeRED2024', '_blank')}>
                        GitHub Repo
                    </ContentButton>
                </div>

            </div>
        </div>
    </section>

</div>