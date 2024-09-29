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
                Credit Cards Clustering Report 
            </ProjTitleText>
            <ProjectDate> April 2024 </ProjectDate>
        </ProjectTitleArea>

        <ProjectTechArea>
            <TechIconsArea>
                <!-- https://marwin1991.github.io/profile-technology-icons/ -->
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/></code>
                <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183914128-3fc88b4a-4ac1-40e6-9443-9a30182379b7.png" alt="Jupyter Notebook" title="Jupyter Notebook"/></code>
                <code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/76012086/4ec200c2-acdf-4c42-b419-cd49cba3d09f" alt="NumPy" title="NumPy"/></code>
                <code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/76012086/24b02d77-2f28-43c7-b5d6-e15e3395851b" alt="Pandas" title="Pandas"/></code>
            </TechIconsArea>

            <ProjTechText>
                Python (Jupyter), NumPy, Pandas, Matplotlib
            </ProjTechText>
        </ProjectTechArea>
    </ProjectHeader>

    <ProjectDescriptionArea>
        <ProjDescriptionText>
            An analysis of the performance of three different clustering models applied to a dataset of bank credit card customers, including steps such as data cleaning, preprocessing, feature selection, investigation, and model training.
        </ProjDescriptionText>

        <ProjectButtonArea>
            <LearnMoreButton on:learnMoreClick={() => window.open('/assets/HW5_Report.pdf', '_blank')} />
            <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/Data-Science-I_COSC-3337/tree/main/homeworks/hw5', '_blank')}>
                GitHub Repo
            </ContentButton>
        </ProjectButtonArea>
    </ProjectDescriptionArea>
</ProjectSection>