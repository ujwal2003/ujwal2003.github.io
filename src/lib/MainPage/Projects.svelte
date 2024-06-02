<script lang="ts">
    import ContentButton from "$lib/components/DescriptionContent/contentButton.svelte";
import UpButton from "../components/upButton.svelte";
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ProjSection">
    Projects

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-20 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<div>
    <div class="flex flex-col w-[22%] border shadow-sm rounded-xl bg-[#0F182C] border-[#161E23] shadow-neutral-700/70">
        <img class="w-full h-auto rounded-t-xl" 
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" 
            alt="Description">

        <div class="p-4">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            Card title
          </h3>

          <p class="mt-1 text-[#7F94A6] text-base pb-4">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>

            <button type="button" class="py-1 px-8 inline-flex items-center gap-x-2 text-md rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Learn More
            </button>

            <ContentButton arrowIcon smallText>
                GitHub Repo
            </ContentButton>
        </div>
    </div>
</div>