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

<div class="mt-6 pb-4">

    <DescriptionContent>
        <DescriptionHead>
            <ContentTitle> Work 1 </ContentTitle>
            <ContentSubtitle> Jun. 2024 - Present </ContentSubtitle>
        </DescriptionHead>

        <Content>
            <DescriptionTitle> Position Name </DescriptionTitle>
            <ContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </ContentText>
            <ContentButton arrowIcon>
                Learn More
            </ContentButton>
        </Content>
    </DescriptionContent>

</div>