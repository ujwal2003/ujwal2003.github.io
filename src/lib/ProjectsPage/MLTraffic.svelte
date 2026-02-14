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
            <ProjTitleText --pcFontSize="2.2rem" --mobileFontSize="25px"> 
                Traffic Trends ML Model 
            </ProjTitleText>
            <ProjectDate> November - December 2023 </ProjectDate>
        </ProjectTitleArea>

        <ProjectTechArea>
            <TechIconsArea>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_93_15)">
                        <path d="M23.4281 12.7312C22.9359 12.5343 22.1484 12.4031 21.164 12.3703C19.7859 12.3375 18.2109 12.5015 18.1453 12.5343V19.0968C22.5093 19.2937 23.2312 18.539 23.2312 18.539C27.0375 16.6031 24.6421 13.2234 23.4281 12.7312Z" fill="#75AADB"/>
                        <path d="M21 0C9.38437 0 0 9.38437 0 21C0 32.6156 9.38437 42 21 42C32.6156 42 42 32.6156 42 21C42 9.38437 32.5828 0 21 0ZM30.3844 29.4656H26.9062L21.1313 20.8359H18.1781V27.5625H21.1313V29.4656H13.6172V27.5953L16.1109 27.5625L16.0781 12.5016C15.8156 12.4359 13.6172 12.2391 13.6172 12.2391V10.5C13.9453 10.8281 16.2094 10.8938 16.2094 10.8938C16.7344 10.9266 17.4891 10.9594 17.9156 10.8609C20.9672 10.3031 23.2969 10.7297 23.2969 10.7297C27.8906 11.7797 27.9563 15.9141 26.6766 18.1453C25.5281 20.0484 23.2969 20.5078 23.2969 20.5078L28.0219 27.6609L30.3844 27.6281V29.4656Z" fill="#75AADB"/>
                        <path d="M13.6484 28.5708V27.6763L14.2456 27.63C14.6554 27.6012 15.066 27.5855 15.4767 27.5828H16.1104V12.4674L15.8026 12.4257C15.3928 12.3772 14.9824 12.3337 14.5715 12.2955L13.6484 12.2069V11.3833C13.6484 10.6181 13.6573 10.5646 13.7764 10.6286C14.2958 10.9065 17.2873 10.9797 18.9706 10.7559C20.3494 10.5728 22.7424 10.6164 23.5759 10.8402C25.375 11.3232 26.5651 12.3647 27.1275 13.9485C27.3628 14.6107 27.3956 15.8671 27.1984 16.647C26.9021 17.8191 26.4141 18.6315 25.602 19.3052C25.1158 19.7088 24.0116 20.2994 23.5857 20.3847C23.4554 20.4106 23.3324 20.4582 23.3127 20.49C23.293 20.5222 24.3374 22.1543 25.6342 24.1171L27.9914 27.6858L29.1835 27.6635L30.3759 27.6412V29.4656L28.6559 29.463L26.9365 29.4607L24.0425 25.1182L21.1494 20.7758H18.1378V27.5825H21.107V29.4656H13.6484V28.5708ZM21.9034 19.002C23.044 18.8215 24.2872 18.0918 24.8477 17.2751C25.6716 16.0732 25.352 14.3252 24.095 13.1581C23.6497 12.7447 23.3714 12.6232 22.5219 12.469C21.825 12.3424 19.6804 12.3201 18.6809 12.429L18.1743 12.4841L18.1552 15.7926L18.1365 19.1008L18.3728 19.1355C18.821 19.2012 21.2176 19.1109 21.9034 19.002Z" fill="white" stroke="white" stroke-width="0.258563"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_93_15">
                            <rect width="42" height="42" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </TechIconsArea>

            <ProjTechText>
                Rstudio
            </ProjTechText>
        </ProjectTechArea>
    </ProjectHeader>

    <ProjectDescriptionArea>
        <ProjDescriptionText>
            Utilized machine learning models such as linear regression and random forest to conduct a comprehensive analysis of intersate traffic and identify key factors pivotal to predicting traffic volume using data from 
            <HighlightLink href="https://www.kaggle.com/code/ramyahr/metro-interstate-traffic-volume">
                MN traffic volume for westbound I-94 dataset.
            </HighlightLink>
            <div class="mt-12 max-sm:mt-0"></div>
        </ProjDescriptionText>

        <ProjectButtonArea>
            <LearnMoreButton on:learnMoreClick={() => window.open('/assets/HighHustle_ML.pdf', '_blank')} />
            <ContentButton arrowIcon smallText noTopMargin on:contentClick={() => window.open('https://github.com/ujwal2003/Highway-Hustle_Machine_Learning-Proj', '_blank')}>
                GitHub Repo
            </ContentButton>
        </ProjectButtonArea>
    </ProjectDescriptionArea>
</ProjectSection>