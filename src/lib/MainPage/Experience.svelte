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

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-35 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<div class="grid grid-cols-4 gap-y-4">
    <div class="text-white">Test 1</div>
    <div class="col-span-3 text-white">Content 1</div>

    <div class="text-white">Test 2</div>
    <div class="col-span-3 text-white">Content 2</div>
</div>