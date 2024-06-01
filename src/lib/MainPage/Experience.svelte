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
            <ContentSubtitle> Jun. 2024 - Present </ContentSubtitle>
        </DescriptionHead>

        <Content>
            <DescriptionTitle> Digital Aviation Solutions Intern </DescriptionTitle>
            <ContentText>
                I will be joining Boeing as a Digital Aviation Solutions Intern this Summer.
            </ContentText>
        </Content>
    </DescriptionContent>

</div>