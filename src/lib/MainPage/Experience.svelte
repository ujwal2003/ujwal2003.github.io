<script lang="ts">
    import Content from "$lib/components/DescriptionContent/Content/content.svelte";
    import ContentText from "$lib/components/DescriptionContent/Content/contentText.svelte";
    import DescriptionTitle from "$lib/components/DescriptionContent/Content/descriptionTitle.svelte";
    import ContentSubtitle from "$lib/components/DescriptionContent/DescriptionHead/contentSubtitle.svelte";
    import ContentTitle from "$lib/components/DescriptionContent/DescriptionHead/contentTitle.svelte";
    import DescriptionHead from "$lib/components/DescriptionContent/DescriptionHead/descriptionHead.svelte";
    import ContentButton from "$lib/components/DescriptionContent/contentButton.svelte";
    import DescriptionContent from "$lib/components/DescriptionContent/descriptionContent.svelte";
    import UpButton from "../components/upButton.svelte";
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ExprSection">
    Experience

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-20 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<div class="mt-6 max-sm:pb-14 flex flex-col gap-16 max-sm:gap-12">

    <DescriptionContent>
        <DescriptionHead>
            <ContentTitle> Boeing </ContentTitle>
            <ContentSubtitle> Jun. 2024 - Aug. 2024 </ContentSubtitle>
        </DescriptionHead>

        <Content>
            <div class="ml-12 max-sm:ml-0">
                <DescriptionTitle> Digital Aviation Solutions - Development Intern </DescriptionTitle>
                <ContentText>
                    Collaborated with a 10-member team of Software and DevOps engineers to automate navigation data analysis tools using shell scripts, reducing manual processing time by 80%. Enhanced flight message data validation with Python, improving readability and boosting validation accuracy by 25%. Integrated data validation into a CI/CD pipeline and Docker, significantly improving the ease of viewing statistics through user-friendly test result displays.
                </ContentText>
            </div>
        </Content>
    </DescriptionContent>

    <DescriptionContent>
        <DescriptionHead>
            <ContentTitle> CougarCS </ContentTitle>
            <ContentSubtitle> Aug. 2023 - Aug. 2024 </ContentSubtitle>
        </DescriptionHead>

        <Content>
            <DescriptionTitle> Computer Science Tutor </DescriptionTitle>
            <ContentText>
                Guided over 11 students weekly on coding assignments, projects, and lab exercises, while also conducting one-on-one and group tutoring sessions in Computer Science courses such as Data Structures. Collaborated with a team of 30 tutors to create customized lesson plans, resulting in a 12% average increase in student exam scores.
            </ContentText>
        </Content>
    </DescriptionContent>

</div>