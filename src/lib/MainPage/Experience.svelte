<script lang="ts">
    import UpButton from "../components/upButton.svelte";
    import DescriptionCard from "$lib/components/DescriptionCard/DescriptionCard.svelte";
    import DescriptionCardTitle from "$lib/components/DescriptionCard/DescriptionCardTitle.svelte";
    import DescriptionTitle from "$lib/components/DescriptionContent/Content/descriptionTitle.svelte";
    import DescriptionCardContent from "$lib/components/DescriptionCard/DescriptionCardContent.svelte";
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ExprSection">
    Experience

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-35 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<!-- <div class="grid grid-cols-4 gap-y-4">
    <div class="text-white">Test 1</div>
    <div class="col-span-3 text-white">Content 1</div>
</div> -->

<DescriptionCard>
    <DescriptionCardTitle 
        company={'Company'} 
        duration={'Month 20XX - Present'} 
    />

    <DescriptionCardContent jobTitle={'Job Title'}>
        {#snippet jobDescription()}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        {/snippet}
    </DescriptionCardContent>
</DescriptionCard>