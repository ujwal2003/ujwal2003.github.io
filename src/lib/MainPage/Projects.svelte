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
    Projects

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-20 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<div class="flex gap-6 flex-wrap mt-3 max-sm:pb-3 max-sm:flex-col max-sm:gap-3">

    <ProjectCard>
        <ProjectImage />
        <CardContent>
            <CardTitle> Project Title </CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>

            <ButtonContainer>
                <LearnMoreBtn on:learnMoreClick={() => console.log('learn more!!')} />
                <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => console.log('repo!')}>
                    GitHub Repo
                </ContentButton>
            </ButtonContainer>
        </CardContent>
    </ProjectCard>

</div>