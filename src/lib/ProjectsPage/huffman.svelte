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
                Distributed Huffman Decompressor
            </ProjTitleText>
            <ProjectDate> March 2023 </ProjectDate>
        </ProjectTitleArea>

        <ProjectTechArea>
            <TechIconsArea>
                <!-- https://marwin1991.github.io/profile-technology-icons/ -->
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png" alt="C" title="C"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png" alt="C++" title="C++"/></code>
            </TechIconsArea>

            <ProjTechText>
                C, C++, Makefile
            </ProjTechText>
        </ProjectTechArea>
    </ProjectHeader>

    <ProjectDescriptionArea>
        <ProjDescriptionText>
            Developed server and client programs using UNIX sockets to enable inter-process communication for up to 10 concurrent client connections. Implemented multi-threaded POSIX systems to transmit binary codes. The server utilizes multiple UNIX child processes to generate Huffman trees and handle simultaneous client requests efficiently.
        </ProjDescriptionText>

        <ProjectButtonArea>
            <LearnMoreButton on:learnMoreClick={() => window.open('https://ujwal2003.github.io/#', '_blank')} disabled />
            <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/Distributed-Huffman-Decompressor', '_blank')}>
                GitHub Repo
            </ContentButton>
        </ProjectButtonArea>
    </ProjectDescriptionArea>
</ProjectSection>