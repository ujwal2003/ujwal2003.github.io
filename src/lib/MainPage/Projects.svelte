<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard/projectCard.svelte';
    import ProjectImage from '$lib/components/ProjectCard/projectImage.svelte';
    import CardContent from '$lib/components/ProjectCard/cardContent.svelte';
    import CardTitle from '$lib/components/ProjectCard/cardTitle.svelte';
    import CardText from '$lib/components/ProjectCard/cardText.svelte';
    import ButtonContainer from '$lib/components/ProjectCard/CardButtons/buttonContainer.svelte';
    import LearnMoreBtn from '$lib/components/ProjectCard/CardButtons/learnMoreButton.svelte';
    import ContentButton from "$lib/components/DescriptionContent/contentButton.svelte";
    import UpButton from "../components/upButton.svelte";
    import HighlightLink from '$lib/components/highlightLink.svelte';
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ProjSection">
    Featured Projects

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-35 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<div class="flex gap-6 flex-wrap mt-3 max-sm:pb-3 max-sm:flex-col max-sm:gap-3">

    <ProjectCard>
        <ProjectImage />
        <CardContent>
            <CardTitle> CatchUp </CardTitle>
            <CardText>
                A gamified journaling app built with SwiftUI promotes mental well-being through daily gratitude and reflection. It features a Figma-designed city-building interface and integrates Firebase and Apple CoreML for secure user management, data storage, and sentiment-based personalization.
            </CardText>

            <div class="pt-[6.55rem] max-sm:pt-10"></div>
            <ButtonContainer>
                <LearnMoreBtn disabled />
                <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/Team10_JournalApp', '_blank')}>
                    GitHub Repo
                </ContentButton>
            </ButtonContainer>

            <p class="mt-5 text-xs text-neutral-500">
                December 2024
            </p>
        </CardContent>
    </ProjectCard>

    <ProjectCard>
        <ProjectImage src='/images/chatAIR_projectBanner.png' />
        <CardContent>
            <CardTitle> Chat AIr </CardTitle>
            <CardText>
                Mobile chatbot powered by AI to find cheap flights. First place winner at the 
                <HighlightLink href="https://codered-genesis.devpost.com/">CodeRED: Genisis Hackathon</HighlightLink> 
                PROS track.
            </CardText>

            <div class="pt-[16.95rem] max-sm:pt-10"></div>
            <ButtonContainer>
                <LearnMoreBtn on:learnMoreClick={() => window.open('https://devpost.com/software/chatair', '_blank')} />
                <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/CodeRED2024', '_blank')}>
                    GitHub Repo
                </ContentButton>
            </ButtonContainer>

            <p class="mt-5 text-xs text-neutral-500">
                February 2024
            </p>
        </CardContent>
    </ProjectCard>

    <ProjectCard>
        <ProjectImage src="/images/highway_hustle.png" />
        <CardContent>
            <CardTitle> Traffic Trends ML Model </CardTitle>
            <CardText>
                Utilized machine learning and statistical analysis to conduct a comprehensive analysis of intersate traffic and identify key factors pivotal to predicting traffic volume.
            </CardText>

            <div class="pt-[11.85rem] max-sm:pt-10"></div>
            <ButtonContainer>
                <LearnMoreBtn on:learnMoreClick={() => window.open('/assets/HighHustle_ML.pdf', '_blank')} />
                <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/Highway-Hustle_Machine_Learning-Proj', '_blank')}>
                    GitHub Repo
                </ContentButton>
            </ButtonContainer>

            <p class="mt-5 text-xs text-neutral-500">
                December 2023
            </p>
        </CardContent>
    </ProjectCard>

</div>

<div class="mt-5 max-sm:mt-2 max-sm:mb-3">
    <a href='/projects'
       class="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
        See All My Projects
    </a>
</div>

<!-- <div class="mt-5 max-sm:mt-2 max-sm:mb-3">
    <button disabled
       class="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 
              disabled:opacity-50 disabled:cursor-no-drop disabled:hover:bg-blue-600">
        See All My Projects
    </button>
</div> -->