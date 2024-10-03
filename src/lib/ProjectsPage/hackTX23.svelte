<script lang="ts">
    import ProjectSection from "$lib/components/ProjectSection/projectSection.svelte";
    import ProjectHeader from "$lib/components/ProjectSection/ProjectSectionHead/projectHeader.svelte";

    import ProjectTitleArea from "$lib/components/ProjectSection/ProjectSectionHead/ProjectTitleArea/projectTitleArea.svelte";
    import ProjTitleText from "$lib/components/ProjectSection/ProjectSectionHead/ProjectTitleArea/projTitleText.svelte";
    import ProjectDate from "$lib/components/ProjectSection/ProjectSectionHead/ProjectTitleArea/projectDate.svelte";

    import ProjectTechArea from "$lib/components/ProjectSection/ProjectSectionHead/ProjectTechnologies/projectTechArea.svelte";
    import TechIconsArea from "$lib/components/ProjectSection/ProjectSectionHead/ProjectTechnologies/techIconsArea.svelte";
    import ProjTechText from "$lib/components/ProjectSection/ProjectSectionHead/ProjectTechnologies/projTechText.svelte";

    import ProjectDescriptionArea from "$lib/components/ProjectSection/ProjectDescription/projectDescriptionArea.svelte";
    import ProjDescriptionText from "$lib/components/ProjectSection/ProjectDescription/projDescriptionText.svelte";
    import ProjectButtonArea from "$lib/components/ProjectSection/ProjectDescription/projectButtonArea.svelte";
    import ContentButton from "$lib/components/DescriptionContent/contentButton.svelte";
    import LearnMoreButton from "$lib/components/ProjectCard/CardButtons/learnMoreButton.svelte";
    import HighlightLink from "$lib/components/highlightLink.svelte";
</script>

<ProjectSection>
    <ProjectHeader>
        <ProjectTitleArea>
            <ProjTitleText> FutureSite </ProjTitleText>
            <ProjectDate> October 2023 </ProjectDate>
        </ProjectTitleArea>

        <ProjectTechArea>
            <TechIconsArea>
                <!-- https://marwin1991.github.io/profile-technology-icons/ -->
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/></code>
            </TechIconsArea>

            <ProjTechText>
                Figma, ReactJS, TypeScript, ExpressJS, MongoDB
            </ProjTechText>
        </ProjectTechArea>
    </ProjectHeader>

    <ProjectDescriptionArea>
        <ProjDescriptionText>
            Developed an application to match prospective STEM students with career options for a 
            <HighlightLink href="https://hacktx-2023.devpost.com/">
                Capital One financial challenge, 
            </HighlightLink>
            working with a team of four. Built a scalable backend using JavaScript, MongoDB, and secured RESTful APIs with OAuth2 authentication. Integrated Bureau of Labor Statistics salary data to provide users with estimated earning potentials for different careers.
        </ProjDescriptionText>

        <ProjectButtonArea>
            <LearnMoreButton on:learnMoreClick={() => window.open('https://devpost.com/software/futuresight-oafsex', '_blank')} />
            <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/HackTX23', '_blank')}>
                GitHub Repo
            </ContentButton>
        </ProjectButtonArea>
    </ProjectDescriptionArea>
</ProjectSection>