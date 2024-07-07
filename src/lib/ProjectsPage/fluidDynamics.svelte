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
            <ProjTitleText --pcFontSize="2rem" --mobileFontSize="28px"> 
                Fluid Dynamics Reciever 
            </ProjTitleText>
            <ProjectDate> April 2020 </ProjectDate>
        </ProjectTitleArea>

        <ProjectTechArea>
            <TechIconsArea>
                <!-- https://marwin1991.github.io/profile-technology-icons/ -->
                <code><img width="42" src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="Java" title="Java"/></code>
                <code><img width="42" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/a57a85ba-e2dd-4036-85b6-7e1532391627" alt="Arduino" title="Arduino"/></code>
                <code><img width="42" src="https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png" alt="C++" title="C++"/></code>
            </TechIconsArea>

            <ProjTechText>
                Java, Arduino, C++
            </ProjTechText>
        </ProjectTechArea>
    </ProjectHeader>

    <ProjectDescriptionArea>
        <ProjDescriptionText>
            Collaborated with a 2 member team to collect and store fluid sample data from a machine. Arduino collects chemical data from sensors and delivers it through serial transmission
            to a Java Swing desktop application which saves it as CSV file and provides a graph view.
        </ProjDescriptionText>

        <ProjectButtonArea>
            <LearnMoreButton disabled />
            <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/fluid-dynamics-serial-receiver', '_blank')}>
                GitHub Repo
            </ContentButton>
        </ProjectButtonArea>
    </ProjectDescriptionArea>
</ProjectSection>