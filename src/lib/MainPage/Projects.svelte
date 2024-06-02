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
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ProjSection">
    Featured Projects

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-20 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<div class="flex gap-6 flex-wrap mt-3 max-sm:pb-3 max-sm:flex-col max-sm:gap-3">

    <ProjectCard>
        <ProjectImage src='/images/chatAIR_projectBanner.png' />
        <CardContent>
            <CardTitle> Chat AIr </CardTitle>
            <CardText>
                Mobile chatbot powered by AI to find cheap flights. First place winner at the 
                <a  class="hover:bg-none hover:underline hover:decoration-sky-500/[.25] hover:underline-offset-4 hover:decoration-2 hover:decoration-double"
                    href="https://codered-genesis.devpost.com/" target="_blank">
                    <span class="bg-sky-500/[.05]">
                        CodeRED: Genesis Hackathon
                    </span>
                </a> 
                PROS track.
            </CardText>

            <ButtonContainer>
                <LearnMoreBtn on:learnMoreClick={() => window.open('https://devpost.com/software/chatair', '_blank')} />
                <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/CodeRED2024', '_blank')}>
                    GitHub Repo
                </ContentButton>
            </ButtonContainer>
        </CardContent>
    </ProjectCard>

</div>