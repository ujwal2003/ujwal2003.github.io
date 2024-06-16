<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import ContentButton from "$lib/components/DescriptionContent/contentButton.svelte";
    import LearnMoreButton from "$lib/components/ProjectCard/CardButtons/learnMoreButton.svelte";
</script>

<NavBar NavSections={{Home: '/', About: "/#AboutMe", Experience: "/#ExprSection", Projects: "/#ProjSection", Contact: "/#ContactMe"}} smoothScroll={false} />

<div class="flex flex-col ml-44 mt-6 max-sm:ml-0">
    <h1 class="text-white font-semibold text-[64px] max-sm:text-[40px] max-sm:text-center">
        Personal Projects
    </h1>

    <!-- <section class="w-5/6 mt-2 max-sm:w-full max-sm:mt-4">
        <hr class="border-gray-500 max-sm:mx-7">

        <div class="mt-5 flex gap-24 max-sm:flex-col max-sm:gap-6">
            <div class="flex flex-col gap-4 max-sm:items-center">
                <div class="flex flex-col gap-4 max-sm:flex-row max-sm:gap-16">
                    <h2 class="text-white font-medium text-5xl max-sm:text-[32px]">
                        Chat AIr
                    </h2>
    
                    <h3 class="text-[#768087] text-xl pl-2 max-sm:text-base">
                        February 2024
                    </h3>
                </div>
                
                <div class="flex flex-col gap-2 pl-2 max-sm:pl-0 max-sm:pr-12">
                    <h4 class="text-[#768087] text-xl max-sm:text-base">
                        Technologies:
                    </h4>

                    <div class="flex gap-1 max-sm:hidden">
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/></code>
                        <code><img width="42" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma"/></code>
                    </div>
    
                    <p class="text-[#7F94A6] text-sm w-64 max-sm:pl-0.5">
                        React Native, ExpressJS, RapidAPI, Amadeus, CompromiseJS
                    </p>
                </div>
            </div>

            <div class="max-sm:mx-10">
                <p class="text-[#7F94A6] text-2xl max-sm:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div class="flex gap-4 mt-6">
                    <LearnMoreButton disabled />
                    <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003', '_blank')}>
                        GitHub Repo
                    </ContentButton>
                </div>
            </div>
        </div>
    </section> -->

</div>