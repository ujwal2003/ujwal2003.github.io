<script lang="ts">
    import UpButton from "../components/upButton.svelte";
    import DescriptionCard from "$lib/components/DescriptionCard/DescriptionCard.svelte";
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
    <svelte:fragment slot="title">
        <div class="text-white flex flex-col gap-2">
            <h3 class="text-3xl font-medium">
                Company
            </h3>

            <p class="text-[#768087] text-lg font-normal">
                June 2024 - Present
            </p>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="description">
        <div class="col-span-3 flex flex-col gap-2 mt-0.5">
            <h4 class="text-white text-2xl font-normal">
                Job Position
            </h4>

            <p class="text-[#7F94A6] text-xl font-normal w-3/4 max-sm:w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </svelte:fragment>
</DescriptionCard>