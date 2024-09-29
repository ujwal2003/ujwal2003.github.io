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
</script>

<ProjectSection>
    <ProjectHeader>
        <ProjectTitleArea>
            <ProjTitleText --pcFontSize="2rem" --mobileFontSize="28px"> 
                Minipython Interpreter 
            </ProjTitleText>
            <ProjectDate> December 2022 </ProjectDate>
        </ProjectTitleArea>

        <ProjectTechArea>
            <TechIconsArea>
                <!-- https://marwin1991.github.io/profile-technology-icons/ -->
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png" alt="C++" title="C++"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/></code>
            </TechIconsArea>

            <ProjTechText>
                C++, Python
            </ProjTechText>
        </ProjectTechArea>
    </ProjectHeader>

    <ProjectDescriptionArea>
        <ProjDescriptionText>
            Small scale miminalist python interpreter made in C++ that can execute python scripts with addition arithmatic, lists, variable assignment, and print statements.
        </ProjDescriptionText>

        <ProjectButtonArea>
            <LearnMoreButton on:learnMoreClick={() => window.open('https://ujwal2003.github.io/#', '_blank')} disabled />
            <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/minipython-interpreter', '_blank')}>
                GitHub Repo
            </ContentButton>
        </ProjectButtonArea>
    </ProjectDescriptionArea>
</ProjectSection>